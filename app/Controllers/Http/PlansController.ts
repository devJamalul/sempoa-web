import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company';
import {setConfigByPackageActive} from "Config/plan";
import { bind } from '@adonisjs/route-model-binding'
import Subscription from 'App/Models/Subscription';
import Logger from '@ioc:Adonis/Core/Logger'
import CheckoutValidator from 'App/Validators/CheckoutValidator';
import { calculatePlan } from 'Helpers/calculatePlanHelper';

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
    
        return view.render('pages/plans/checkout',{company,configPlans,plan})
    }

    @bind()
    public async checkoutPlan({request, response, session,auth}:HttpContextContract,company:Company){
        const bodyRequest = request.body();
        try {
            const data = await request.validate(CheckoutValidator)
            const feePayByCustomer:number = calculatePlan(data.interval_subscription,data.type_subscription)
            // TODO: Insert TO Subscription
            
            // TODO: XENDIT
            session.flash('success', 'Success Created Company')
            return response.ok({
                hello:"Hllo"
            })
          } catch (error) {
            Logger.warn('Error store company', { data: error.message })
            session.flash({ error: 'Opss! , Failed Create Company', errors : error.messages, request: request.all()})
            return response.redirect().toRoute('checkout.index',{
                'plan':bodyRequest.type_subscription,
                'id(token)':company.token
            });
          }
    }

}
