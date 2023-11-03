import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company';
import { setConfigByPackageActive } from "Config/plan";
import { bind } from '@adonisjs/route-model-binding'
import Subscription from 'App/Models/Subscription';
import Logger from '@ioc:Adonis/Core/Logger'
import CheckoutValidator from 'App/Validators/CheckoutValidator';
import { calculateMaxUsers, calculatePlan, pricePlan } from 'Helpers/calculatePlanHelper';
import sempoa from 'Config/sempoa';
import { DateTime } from 'luxon';
import { requestSave,responseSave} from 'Helpers/payloadHelper'
import Payment from 'App/Models/Payment';
import Database from '@ioc:Adonis/Lucid/Database';
import ChargeCreditCard from 'App/Services/ChargeCreditCard';
import ErpIntegartion from 'App/Services/ErpIntegartion';
import { encrypt } from 'Helpers/EncryptDataHelper';

export default class PlansController {
  @bind()
  public async index({ view }: HttpContextContract, company: Company) {
    const packageActive = await Subscription.packageActive(company);
    const configPlans = setConfigByPackageActive(packageActive, Subscription)
    return view.render('pages/plans/index', { configPlans, company })
  }
  @bind()
  public async checkoutPlanShow({ view }: HttpContextContract, plan: string, company: Company) {
    const packageActive = await Subscription.packageActive(company);
    const configPlans = setConfigByPackageActive(packageActive, Subscription)
    const publicKey = sempoa.xendit.public_key
    const priceActivePlan = pricePlan(packageActive)
    const externalId = await Payment.generateReferenceNumber()

    return view.render('pages/plans/checkout', { company, configPlans, plan, publicKey, priceActivePlan, externalId })
  }

  @bind()
  public async checkoutPlan({ request, response, session, auth }: HttpContextContract, company: Company) {
    const trx = await Database.transaction()

    try {
      // Start Depedencies
      const data = await request.validate(CheckoutValidator)
      const packageActive = await Subscription.packageActive(company);
      const feePayByCustomer: number = calculatePlan(data.interval_subscription, data.type_subscription, packageActive)
      const maxUser: number = calculateMaxUsers(data.type_subscription)
      const user = auth.user
      const now = DateTime.now()

      // update company
      company.token_id = encrypt(data.token_id)
      company.token_auth_id = data.token_auth_id ? encrypt(data.token_auth_id) :'';
      company.masked_card_number = data.masked_card_number
      await company.save()

      // update other Subscriptions
      await Subscription
        .query()
        .where('company_id', company.id)
        .where('status', Subscription.STATUS_ONGOING)
        .update({
          is_recurring: false,
          status: Subscription.STATUS_TERMINATED
        })


      // insert to Subscription
      const subscription = await company.related('subscriptions').create({
        reference_number: await Subscription.generateReferenceNumber(company.id),
        package_name: data.type_subscription,
        package_description: data.type_subscription + ' ' + data.interval_subscription + ' Bulan',
        max_users: maxUser,
        price: feePayByCustomer,
        status: Subscription.STATUS_PENDING_PAYMENT,
        start_date: now,
        end_date: (data.interval_subscription > 1)
          ? now.plus({ months: data.interval_subscription }).endOf('month')
          : now.endOf('month'),
        is_recurring: true,
        interval: 'MONTH',
        interval_count: data.interval_subscription,
        created_by: user?.name,
        updated_by: user?.name,
      })


      // insert to payments table
      const payment = new Payment
      payment.reference_number = await Payment.generateReferenceNumber()
      payment.subscription_id = subscription.id
      payment.amount = subscription.price
      payment.status = Payment.STATUS_PENDING
      payment.created_by = company.pic_name
      payment.updated_by = company.pic_name
      await payment.save()

      // End Depedencies

      const urlPayload = `Subscription ${company.company_name} for  ${subscription.package_name} ${subscription.interval_count} Bulan`
      // save - tokenization
      await requestSave(urlPayload,company.pic_name,company.pic_name,JSON.parse(data?.payload))
      await responseSave(urlPayload,'Xendit','Xendit',JSON.parse(data.response))
      // save - authentication
      await requestSave(urlPayload,company.pic_name,company.pic_name,JSON.parse(data.payload_auth ?? ''))
      await responseSave(urlPayload,'Xendit','Xendit',JSON.parse(data.response_auth ?? ''))

      const chargeCreditCard = new ChargeCreditCard();
      chargeCreditCard.company = company;
      chargeCreditCard.payment = payment;
      chargeCreditCard.subcription = subscription;


      const payToXendit = await chargeCreditCard.withXendit(feePayByCustomer,false)
      await responseSave('Create Charge :','xendit','xendit',payToXendit.response,payToXendit.is_fail)

      payment.status = payToXendit.response.status;
      payment.updated_by = 'xendit';
      payment.save();

      if(payToXendit.status == 'failed') {
        subscription.status = Subscription.STATUS_TERMINATED
        subscription.save();
        throw new Error(payToXendit.message)
      }
      if(payToXendit.response.status == 'AUTHORIZED'){
        const captureCharge = await chargeCreditCard.captureCard(payToXendit.response.id)
        await responseSave('Caputure Charge :','xendit','xendit',captureCharge.response,captureCharge.is_fail)
        if(captureCharge.status == 'failed') throw new Error(captureCharge.message)
      }

      subscription.status = Subscription.STATUS_ONGOING;
      subscription.save();

      const erpIntegration = new ErpIntegartion()
      erpIntegration.company = company;
      erpIntegration.subscription = subscription;
      erpIntegration.updateSubscription()

      await trx.commit()
      return response.redirect().toRoute('checkout.message');
    } catch (error) {
      await trx.rollback()
      Logger.warn('Failed Checkout Plan: ' + error.message)
      Logger.warn(error)
      session.flash({ error: 'Opss! , Failed Chechkout Plan', errors: error.messages, request: request.all() })
      return response.redirect().toRoute('checkout.index', {
        'plan': request.body().type_subscription,
        'id(token)': company.token
      });
    }
  }


  @bind()
  public async inActivePlan({ response }: HttpContextContract,company: Company){
    try {
      const now = DateTime.now()
      await Subscription.query()
      .where('company_id',company.id)
      .where('status',Subscription.STATUS_ONGOING)
      .update({
        is_recurring: false,
        status: Subscription.STATUS_TERMINATED,
        updated_by: company.pic_name,
        note: `Terminated at ${now}`
      })

      return response.json({
        code:200,
        message: 'Berhasil menonaktifkan plan.',
        is_subscription: false
      })
    } catch (error) {
      return response.status(400).json({
        code:500,
        message: 'Gagal menonaktifkan plan.',
      })
    }
  }

}
