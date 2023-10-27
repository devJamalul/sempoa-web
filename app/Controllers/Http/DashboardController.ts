import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
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
    const totalCompany = await Database
                          .from('companies')
                          .count('* as total')
     const companyActive = await Database.rawQuery("SELECT SUM((SELECT COUNT(*) from subscriptions s WHERE s.status = 'ongoing' AND s.company_id = c.id )) as 'active_company' FROM  companies c GROUP by 'active_company'");
     
    const counter = {
      new_company : newCompany.$extras.new_company,
      earning_monthly: earningMonthly.$extras.earning,
      earning_year: earningYear.$extras.earning,
      total_earning: totalEarning.$extras.earning,
      total_company: totalCompany[0].total,
      total_company_active:companyActive[0][0].active_company,
    
    }
    counter['total_company_inactive'] = counter.total_company - counter.total_company_active;  
    return view.render('dashboard',{counter});
  }
}
