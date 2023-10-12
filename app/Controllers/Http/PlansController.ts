import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company';
import {setConfigByPackageActive} from "Config/plan";
import { bind } from '@adonisjs/route-model-binding'
import Subscription from 'App/Models/Subscription';
import Logger from '@ioc:Adonis/Core/Logger'
import CheckoutValidator from 'App/Validators/CheckoutValidator';
import { calculateMaxUsers, calculatePlan,  pricePlan} from 'Helpers/calculatePlanHelper';
import sempoa from 'Config/sempoa';
import { DateTime } from 'luxon';
import Payload from 'App/Models/Payload';

export default class PlansController {
    @bind()
    public async index({ view }:HttpContextContract,company:Company) {
        const packageActive = await Subscription.packageActive(company);
        const configPlans = setConfigByPackageActive(packageActive,Subscription)
       return view.render('pages/plans/index',{configPlans,company})
    }
    @bind()
    public async checkoutPlanShow({view}:HttpContextContract,plan:string,company:Company){
        const packageActive = await Subscription.packageActive(company);
        const configPlans = setConfigByPackageActive(packageActive,Subscription)
        const publicKey = sempoa.xendit.public_key
        const priceActivePlan = pricePlan(packageActive)

      return view.render('pages/plans/checkout', { company, configPlans, plan, publicKey ,priceActivePlan})
    }

    @bind()
    public async checkoutPlan({request, response, session,auth}:HttpContextContract,company:Company){
        const bodyRequest = request.body();
        try {
            const data = await request.validate(CheckoutValidator)
            const packageActive = await Subscription.packageActive(company);
            const feePayByCustomer:number = calculatePlan(data.interval_subscription,data.type_subscription,packageActive)
            const maxUser:number = calculateMaxUsers(data.type_subscription)
            const user = auth.user
            const now = DateTime.now()

            // update company
            company.token_id = data.token_id
            company.masked_card_number = data.masked_card_number
            await company.save()

            // insert to Subscription
            await company.related('subscriptions').create({
                reference_number: await Subscription.generateReferenceNumber(company.id),
                package_name: data.type_subscription,
                package_description: data.type_subscription + ' ' + data.interval_subscription + ' Bulan',
                max_users: maxUser,
                price: feePayByCustomer,
                status: Subscription.STATUS_ONGOING,
                start_date: now,
                end_date: now.plus({ months: data.interval_subscription }).endOf('month'),
                is_recurring: true,
                interval: 'MONTH',
                interval_count: data.interval_subscription,
                created_by: user?.name,
                updated_by: user?.name,
            })

            // insert to payload
            const myRequest = new Payload
            myRequest.status = 'request'
            myRequest.url = 'Subscription ' + company.company_name + ' for ' + data.type_subscription + ' ' + data.interval_subscription + ' Bulan'
            myRequest.payload = data.payload
            myRequest.created_by = user?.name ?? null
            myRequest.updated_by = user?.name ?? null
            await myRequest.save()

            const myResponse = new Payload
            myResponse.status = 'response'
            myResponse.url = 'Subscription ' + company.company_name + ' for ' + data.type_subscription + ' ' + data.interval_subscription + ' Bulan'
            myResponse.payload = data.response
            myResponse.created_by = user?.name ?? null
            myResponse.updated_by = user?.name ?? null
            await myResponse.save()

            return response.redirect().toRoute('checkout.message');
          } catch (error) {
            Logger.warn('Error store company', { data: error.message })
            Logger.warn(error)
            session.flash({ error: 'Opss! , Failed Create Company', errors : error.messages, request: request.all()})
            return response.redirect().toRoute('checkout.index',{
                'plan':bodyRequest.type_subscription,
                'id(token)':company.token
            });
          }
    }

}
