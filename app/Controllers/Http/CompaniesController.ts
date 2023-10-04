import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company';
import Logger from '@ioc:Adonis/Core/Logger'
import Subscription from 'App/Models/Subscription';
import CompanyCreateValidator from 'App/Validators/CompanyCreateValidator';
import { addMonths } from 'date-fns';
import { DateTime } from 'luxon';
import Database from '@ioc:Adonis/Lucid/Database';

export default class CompaniesController {
  private title: string = 'Company';

  public async index({ view }: HttpContextContract) {
    const title = this.title
    const companies = await Company.all()
    return view.render('pages/company/index', { title, companies });
  }

  public async create({ view }: HttpContextContract) {
    const title = 'New ' + this.title
    return view.render('pages/company/create', { title });
  }

  public async store({ request, response, session, auth }: HttpContextContract) {
    try {
      const data = await request.validate(CompanyCreateValidator)
      const user = auth.user
      const now = DateTime.now()

      await Database.transaction(async (trx) => {
        const company = new Company()
        company.company_name = data.company_name
        company.address = data.company_address
        company.city = data.city
        company.country = data.country
        company.email = data.company_email
        company.phone_number = data.company_phone
        company.pic_name = data.pic_name
        company.pic_email = data.pic_email
        company.pic_phone_number = data.pic_phone
        company.created_by = user?.name ?? "Sistem"
        company.updated_by = user?.name ?? "Sistem"
        company.useTransaction(trx)
        await company.save()

        await company.related('subscriptions').create({
          package_name: "Trial",
          package_description: "Trial 30 hari",
          max_users: 1,
          price: 0,
          start_date: now,
          end_date: now.plus({ months: 1 })
        })

      })

      session.flash('success', 'oke')
      return response.redirect().toRoute('companies.index')
    } catch (error) {
      Logger.warn('Error store company', { data: error.message })
      session.flash('error', error.message)
      return response.redirect().toRoute('companies.create')
    }
  }
}
