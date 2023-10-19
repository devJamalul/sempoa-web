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
import Payload from 'App/Models/Payload';
import axios from 'axios';
import Payment from 'App/Models/Payment';

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
    const bodyRequest = request.body();
    try {
      const data = await request.validate(CheckoutValidator)
      const packageActive = await Subscription.packageActive(company);
      const feePayByCustomer: number = calculatePlan(data.interval_subscription, data.type_subscription, packageActive)
      const maxUser: number = calculateMaxUsers(data.type_subscription)
      const user = auth.user
      const now = DateTime.now()

      // update company
      company.token_id = data.token_id
      company.token_auth_id = data.token_auth_id ?? null
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
        status: Subscription.STATUS_ONGOING,
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

      // insert to payload - tokenization
      const myRequest = new Payload
      myRequest.status = 'request'
      myRequest.url = 'Subscription ' + company.company_name + ' for ' + data.type_subscription + ' ' + data.interval_subscription + ' Bulan'
      myRequest.payload = data?.payload ?? null
      myRequest.created_by = company.pic_name
      myRequest.updated_by = company.pic_name
      await myRequest.save()

      const myResponse = new Payload
      myResponse.status = 'response'
      myResponse.url = 'Subscription ' + company.company_name + ' for ' + data.type_subscription + ' ' + data.interval_subscription + ' Bulan'
      myResponse.payload = data.response
      myResponse.created_by = 'Xendit'
      myResponse.updated_by = 'Xendit'
      await myResponse.save()

      // insert to payload - authentication
      const myAuthRequest = new Payload
      myAuthRequest.status = 'request'
      myAuthRequest.url = 'Subscription ' + company.company_name + ' for ' + data.type_subscription + ' ' + data.interval_subscription + ' Bulan'
      myAuthRequest.payload = data?.payload_auth ?? null
      myAuthRequest.created_by = company.pic_name
      myAuthRequest.updated_by = company.pic_name
      await myAuthRequest.save()

      const myAuthResponse = new Payload
      myAuthResponse.status = 'response'
      myAuthResponse.url = 'Subscription ' + company.company_name + ' for ' + data.type_subscription + ' ' + data.interval_subscription + ' Bulan'
      myAuthResponse.payload = data.response_auth ?? null
      myAuthResponse.created_by = 'Xendit'
      myAuthResponse.updated_by = 'Xendit'
      await myAuthResponse.save()

      // update subscription to Sempoa ERP
      const urlSempoa = sempoa.api + '/integration/subscription';
      const headers = {
        headers: {
          'Authorization': 'Bearer ' + company.token,
          'Accept': "application/json"
        }
      }
      const erpPayload = {
        subscription_name: data.type_subscription,
        subscription_end: (data.interval_subscription > 1)
          ? now.plus({ months: data.interval_subscription }).endOf('month').toFormat('yyyy-LL-dd')
          : now.endOf('month').toFormat('yyyy-LL-dd'),
        subscription_max_user: maxUser,
        subscription_status: Subscription.STATUS_ONGOING,
      }

      // insert to payload
      const myRequest2 = new Payload
      myRequest2.status = 'request'
      myRequest2.url = 'Update Subscription to Sempoa ERP: ' + company.company_name + ' for ' + data.type_subscription + ' ' + data.interval_subscription + ' Bulan'
      myRequest2.payload = JSON.stringify(erpPayload)
      myRequest2.created_by = company.pic_name
      myRequest2.updated_by = company.pic_name
      myRequest2.save()

      await axios.post(urlSempoa, erpPayload, headers)
        .then(function (response) {
          // handle success

          let responseERP = response.data
          const myResponse2 = new Payload
          myResponse2.status = 'response'
          myResponse2.url = 'Update Subscription to Sempoa ERP: ' + company.company_name + ' for ' + data.type_subscription + ' ' + data.interval_subscription + ' Bulan'
          myResponse2.payload = JSON.stringify(responseERP)
          myResponse2.created_by = 'Sempoa ERP'
          myResponse2.updated_by = 'Sempoa ERP'
          myResponse2.save()

          Logger.info('Success update subscription to Sempoa ERP')
        })
        .catch(function (error) {
          // handle error
          Logger.warn(JSON.stringify(error))
          throw new Error('Error update subscription to Sempoa ERP: ' + error.message)
        })
        .finally(function () {
          // always executed
        });

      // insert to payments table
      const payment = new Payment
      payment.reference_number = await Payment.generateReferenceNumber()
      payment.subscription_id = subscription.id
      payment.amount = subscription.price
      payment.status = Payment.STATUS_PENDING
      payment.created_by = company.pic_name
      payment.updated_by = company.pic_name
      await payment.save()

      // charge to Xendit
      const urlXenditCharge = 'https://api.xendit.co/credit_card_charges'
      const chargePayload = {
        token_id: company.token_id,
        external_id: payment.reference_number,
        authentication_id: company.token_auth_id,
        amount: subscription.price,
        currency: 'IDR',
        capture: false
      }
      const headerXendit = {
        headers: {
          'Authorization': 'Basic ' + sempoa.xendit.secret_key,
        }
      }
      // insert to payload
      const myXenditChargeRequest = new Payload
      myXenditChargeRequest.status = 'request'
      myXenditChargeRequest.url = 'Create charge: ' + company.company_name + ' for ' + data.type_subscription + ' ' + data.interval_subscription + ' Bulan'
      myXenditChargeRequest.payload = JSON.stringify(chargePayload)
      myXenditChargeRequest.created_by = company.pic_name
      myXenditChargeRequest.updated_by = company.pic_name
      myXenditChargeRequest.save()

      // post to Xendit
      await axios.post(urlXenditCharge, chargePayload, headerXendit)
        .then(function (response) {
          // handle success
          let responseXendit = response.data

          // insert to payload
          const myXenditChargeResponse = new Payload
          myXenditChargeResponse.status = 'response'
          myXenditChargeResponse.url = 'Create charge: ' + company.company_name + ' for ' + data.type_subscription + ' ' + data.interval_subscription + ' Bulan'
          myXenditChargeResponse.payload = JSON.stringify(responseXendit)
          myXenditChargeResponse.created_by = 'Xendit'
          myXenditChargeResponse.updated_by = 'Xendit'
          myXenditChargeResponse.save()

          // update payment
          Payment
            .query()
            .where('reference_number', responseXendit.external_id)
            .update({
              status: responseXendit.status,
              updated_by: 'Xendit'
            })

          Logger.info('Success charge to Xendit')
        })
        .catch(function (error) {
          // handle error
          Logger.warn(JSON.stringify(error))

          // insert to payload
          const myXenditChargeResponse = new Payload
          myXenditChargeResponse.status = 'response - failed  '
          myXenditChargeResponse.url = 'Create charge: ' + company.company_name + ' for ' + data.type_subscription + ' ' + data.interval_subscription + ' Bulan'
          myXenditChargeResponse.payload = JSON.stringify(error)
          myXenditChargeResponse.created_by = 'Xendit'
          myXenditChargeResponse.updated_by = 'Xendit'
          myXenditChargeResponse.save()

          // update payment
          Payment
            .query()
            .where('reference_number', payment.reference_number)
            .update({
              status: error.message,
              updated_by: 'Xendit'
            })

          // handle error
          throw new Error('Error charge to Xendit: ' + error.message)
        })
        .finally(function () {
          // always executed
        });

      return response.redirect().toRoute('checkout.message');
    } catch (error) {
      Logger.warn('Error store company: ' + error.message)
      Logger.warn(error)
      session.flash({ error: 'Opss! , Failed Create Company', errors: error.messages, request: request.all() })
      return response.redirect().toRoute('checkout.index', {
        'plan': bodyRequest.type_subscription,
        'id(token)': company.token
      });
    }
  }


  @bind()
  public async inActivePlan({ response }: HttpContextContract,company: Company){
    try {
      await Subscription.query()
      .where('company_id',company.id)
      .where('status',Subscription.STATUS_ONGOING)
      .update({
        is_recurring: false,
        status: Subscription.STATUS_TERMINATED,
        updated_by: company.pic_name
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
