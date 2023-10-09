import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company';
import {setConfigByPackageActive} from "../../../config/plan";
import { bind } from '@adonisjs/route-model-binding'
import Subscription from 'App/Models/Subscription';
export default class PlansController {
    
    @bind()
    public async index({ view }:HttpContextContract,company:Company) {
        const packageActive = await Company.packageActive(company);
        const configPlans = setConfigByPackageActive(packageActive,Subscription)

       return view.render('pages/plans/index',{configPlans,company})
    }

}
