import { bind } from '@adonisjs/route-model-binding';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company';
import Subscription from 'App/Models/Subscription';
import Logger from '@ioc:Adonis/Core/Logger'
import { DateTime } from 'luxon';
import axios from 'axios';
import Payment from 'App/Models/Payment';
import Payload from 'App/Models/Payload';
import sempoa from 'Config/sempoa';
export default class SubscriptionsController {
  private title: string = 'Subscription';

  public async index({ view,request }: HttpContextContract) {
    let status = request.qs()?.status ;
    const statusSubscrition = [Subscription.STATUS_ONGOING,Subscription.STATUS_PENDING_PAYMENT]
    if(statusSubscrition.includes(status) == false) status = 'Ongoing';
    const title = this.title
    const subscriptions = await Subscription.query().where('status',status).preload('company').orderBy('status', 'asc')
    return view.render('pages/subscription/index', { title, subscriptions ,status});
  }

  public async create({ view,request }: HttpContextContract) {
    
    const token = request.qs().id ?? 1;
    const company = await Company.query().where('token',token).firstOrFail();
    const title = 'New ' + this.title
    return view.render('pages/subscription/create', { title ,company});
    
   }

  public async store({ request, response, session, auth}: HttpContextContract) { 
    
    const company = await Company.findOrFail(request.body().company_id); 
    try{
      const feePayByCustomer = parseInt(request.body().total_payment.replaceAll('.',''))     
      const user = auth.user
      const now = DateTime.now()
      const data = request.body();
       // update other Subscriptions
       await Subscription
       .query()
       .where('company_id', company.id)
       .where('status', Subscription.STATUS_ONGOING)
       .update({
         is_recurring: false,
         status: Subscription.STATUS_TERMINATED
       })

       const subscription = await company.related('subscriptions').create({
        reference_number: await Subscription.generateReferenceNumber(company.id),
        package_name: Subscription.PACKAGE_ENTERPRISE,
        package_description: Subscription.PACKAGE_ENTERPRISE + ' ' + data.interval_subscription + ' Bulan',
        max_users: data.max_user,
        price: feePayByCustomer,
        status: Subscription.STATUS_ONGOING,
        start_date: now,
        end_date: (data.interval_subscription > 1)
          ? now.plus({ months: data.interval_subscription }).endOf('month')
          : now.endOf('month'),
        is_recurring: false,
        interval: 'MONTH',
        interval_count: data.interval_subscription,
        created_by: user?.name,
        updated_by: user?.name,
      })


          // update subscription to Sempoa ERP
          const urlSempoa = sempoa.api + '/integration/subscription';
          const headers = {
            headers: {
              'Authorization': 'Bearer ' + company.token,
              'Accept': "application/json"
            }
          }
          const erpPayload = {
            subscription_name: Subscription.PACKAGE_ENTERPRISE,
            subscription_end: (data.interval_subscription > 1)
              ? now.plus({ months: data.interval_subscription }).endOf('month').toFormat('yyyy-LL-dd')
              : now.endOf('month').toFormat('yyyy-LL-dd'),
            subscription_max_user: data.max_user,
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

          session.flash('success', 'Success Created Company')
          return response.redirect().toRoute('companies.index')
    }catch (error) {
      Logger.warn('Error store company: ' + error.message)
      Logger.warn(error)
      session.flash({ error: 'Opss! , Failed Create Subscription', errors: error.messages, request: request.all() })
      return response.redirect().withQs({
        id : company?.token
      }).toRoute('subscriptions.create');
    }
   }

  @bind()
  public async show({ view }, company: Company) {
    const title = company.company_name
    const subscriptions = await Subscription.query()
      .where('company_id', company.id)
      .orderBy('status', 'asc')
    return view.render('pages.subscription.view', { title, subscriptions ,company})
  }

  @bind()
  public async edit({ view }, company: Subscription) {
    const title = company.reference_number
    const subscription = company
    const price = company.price.toLocaleString('id-ID')
    const perusahaan = await Company.find(company.company_id)
    return view.render('pages.subscription.edit', { title, subscription, perusahaan, price })
   }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
