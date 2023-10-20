import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company';
import Subscription from 'App/Models/Subscription';

export default class DashboardController {
  public async index({ view }: HttpContextContract) {
    const statusSubscription = [Subscription.STATUS_ONGOING,Subscription.STATUS_TERMINATED]
    const newCompany = await Company
                        .query()
                        .count('*','new_company')
                        .whereRaw('MONTH(created_at) = MONTH (NOW())')
                        .firstOrFail()
    const earningMonthly =  await Subscription
                          .query()
                          .sum('price','earning')
                          .whereIn('status',statusSubscription)
                          .whereRaw('MONTH(created_at) = MONTH (NOW()) and YEAR(created_at) = YEAR (NOW()) ')
                          .firstOrFail();
    const earningYear   =  await Subscription
                          .query()
                          .sum('price','earning')
                          .whereIn('status',statusSubscription)
                          .whereRaw('YEAR(created_at) = YEAR (NOW())')
                          .firstOrFail();
    const totalEarning  =  await Subscription
                          .query()
                          .sum('price','earning')
                          .whereIn('status',statusSubscription)
                          .firstOrFail();

    const counter = {
      new_company : newCompany.$extras.new_company,
      earning_monthly: earningMonthly.$extras.earning,
      earning_year: earningYear.$extras.earning,
      total_earning: totalEarning.$extras.earning
    }
    return view.render('dashboard',{counter});
  }
}
