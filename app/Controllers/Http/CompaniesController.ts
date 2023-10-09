import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company';
import Logger from '@ioc:Adonis/Core/Logger'
import CompanyCreateValidator from 'App/Validators/CompanyCreateValidator';
import { DateTime } from 'luxon';
import Database from '@ioc:Adonis/Lucid/Database';
import { bind } from '@adonisjs/route-model-binding'
import CompanyUpdateValidator from 'App/Validators/CompanyUpdateValidator';
import axios from 'axios';
import sempoa from 'Config/sempoa';

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
        company.city = data.company_city
        company.country = data.company_country
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

        // send to ERP
        const prepareData = {
          company_name: data.company_name,
          brand_name: data.brand_name,
          address: data.company_address,
          city: data.company_city,
          country: data.company_country,
          company_number: data.company_phone,
          email: data.company_email,
          fax: data.company_fax_number,
          website: data.website,
          vat_enabled: data.is_taxable,
          type: data.account_type,

          pic_name: data.pic_name,
          pic_email: data.pic_email,
          password: data.pic_password,
          phone_number: data.pic_phone,
        }

        console.table(prepareData)

        await axios.post(`${sempoa.api}/v1/auth/register/signup`, prepareData)
          .then(function (response) {
            // handle success
            var responseData = response.data
            company.token = responseData.token
            company.save()
            session.flash('success', responseData.pesan)
          })
          .catch(function (error) {
            // handle error
            throw new Error('Error register to ERP: ' + error.message)
          })
          .finally(function () {
            // always executed
          });

        await trx.commit()
      })


      session.flash('success', 'Success Created Company')
      return response.redirect().toRoute('companies.index')
    } catch (error) {
      Logger.warn('Error store company', { data: error.message })
      session.flash({ error: 'Opss! , Failed Create Company', errors : error.messages, request: request.all()})
      return response.redirect().toRoute('companies.create')
    }
  }

  @bind()
  public async edit({ view },company:Company){
    const title = 'Update ' + this.title
    return  view.render('pages/company/edit',{title,company})
  }

  @bind()
  public async update({request, response, session,auth},company:Company){
    try {
      const user = auth.user
      const data = await request.validate(CompanyUpdateValidator)
      await Database.transaction(async (trx) => {
        company.company_name = data.company_name
        company.address = data.company_address
        company.city = data.company_city
        company.country = data.company_country
        company.email = data.company_email
        company.phone_number = data.company_phone
        company.pic_name = data.pic_name
        company.pic_email = data.pic_email
        company.pic_phone_number = data.pic_phone
        company.updated_by = user?.name ?? "Sistem"
        company.useTransaction(trx)
        await company.save()
        await trx.commit()
      })
      session.flash('success', 'Success Update')
      return response.redirect().toRoute('companies.index')
    } catch (error) {
      Logger.warn('Error Update company', { data: error.message })
      session.flash({ error: 'Opss! , Failed Create Company', errors : error.messages, request: request.all()})
      return response.redirect().toRoute('companies.edit',{id:company.id})
    }
  }


  @bind()
  public async statusUpdate({response, session,auth},company:Company){
    try {
      var message: string = '';

      await Database.transaction(async (trx) => {
        const user = auth.user;
        const isStatusActive = company.is_active ? false : true;
        message = isStatusActive ? "Success active Company" : "Success inactive Company"

        company.is_active = isStatusActive;
        company.updated_by = user?.name ?? "Sistem"
        company.useTransaction(trx)
        await company.save()
        await trx.commit()
      })
      session.flash('success', message)
      return response.redirect().toRoute('companies.index')
    } catch (error) {
      Logger.warn('Error Update company', { data: error.message })
      session.flash({ error: 'Opss! , Failed Updated Status'})
      return response.redirect().toRoute('companies.edit',{id:company.id})
    }
  }


}
