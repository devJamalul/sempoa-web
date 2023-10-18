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
import Subscription from 'App/Models/Subscription';
import Payload from 'App/Models/Payload';

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
     const isEnterprise = request.body().is_enterprise == 'on';

     const company = await Database.transaction(async (trx) => {
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
        // company.user_id = user?.id ?? null
        company.created_by = user?.name ?? "Sistem"
        company.updated_by = user?.name ?? "Sistem"
        company.useTransaction(trx)
        await company.save()

        if(isEnterprise == false){
        
          await company.related('subscriptions').create({
            reference_number: await Subscription.generateReferenceNumber(company.id),
            package_name: "Trial",
            package_description: "Trial 30 hari",
            max_users: 2,
            price: 0,
            status: Subscription.STATUS_ONGOING,
            start_date: now,
            end_date: now.plus({ months: 1 })
          })

        }

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


        await axios.post(`${sempoa.api}/v1/auth/register/signup`, prepareData)
          .then(function (response) {
            // handle success
            var responseData = response.data
            company.token = responseData.token
            company.company_id = responseData.company_id
            company.save()
            Logger.info('Success register to ERP')
            session.flash('success', responseData.pesan)
          })
          .catch(function (error) {
            // handle error
            Logger.warn('Error ERP: ' + error.message)
            throw new Error('Error register to ERP: ' + error.message)
          })
          .finally(function () {
            // always executed
          });

        await trx.commit()
        return company;
      })

      if(isEnterprise){
        return response.redirect().withQs({id:company.token}).toRoute('subscriptions.create')
      }else{
        session.flash('success', 'Success Created Company')
        return response.redirect().toRoute('companies.index')
      }
      
    } catch (error) {
      Logger.warn('Error store company', { data: error.messages })
      Logger.warn(error)
      session.flash({ error: `Opss! , ${error.message}`, errors: error.messages, request: request.all() })
      return response.redirect().toRoute('companies.create')
    }
  }

  @bind()
  public async edit({ view }, company: Company) {
    const title = 'Update ' + this.title
    return view.render('pages/company/edit', { title, company })
  }

  @bind()
  public async update({ request, response, session, auth }, company: Company) {
    try {
      const token = company.token
      const user = auth.user
      const data = await request.validate(CompanyUpdateValidator)
      const isEnterprise = request.body().is_enterprise == 'on';
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

      if(isEnterprise){
        return response.redirect().withQs({id:token}).toRoute('subscriptions.create')
      }else{
        session.flash('success', 'Success Update')
        return response.redirect().toRoute('companies.index')
      }

    } catch (error) {
      Logger.warn('Error Update company', { data: error.message })
      session.flash({ error: 'Opss! , Failed Create Company', errors: error.messages, request: request.all() })
      return response.redirect().toRoute('companies.edit', { id: company.id })
    }
  }


  @bind()
  public async statusUpdate({ response, session, auth }, company: Company) {
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
      session.flash({ error: 'Opss! , Failed Updated Status' })
      return response.redirect().toRoute('companies.edit', { id: company.id })
    }
  }

  public async connect({ request, response }: HttpContextContract) {
    try {
      await Database.transaction(async (trx) => {
        const now = DateTime.now()
        const data = request.all()
        console.table(data)
        const company = new Company()
        company.company_name = data.company_name
        company.address = data.address
        company.city = data.city
        company.country = data.country
        company.email = data.email
        company.phone_number = data.phone_number
        company.pic_name = data.pic_name
        company.pic_email = data.pic_email
        company.pic_phone_number = data.pic_phone_number
        company.token = data.token
        company.created_by = "Sistem"
        company.updated_by = "Sistem"
        company.useTransaction(trx)
        await company.save()

        await company.related('subscriptions').create({
          reference_number: await Subscription.generateReferenceNumber(company.id),
          package_name: "Trial",
          package_description: "Trial 30 hari",
          max_users: 2,
          price: 0,
          status: Subscription.STATUS_ONGOING,
          start_date: now,
          end_date: now.plus({ months: 1 })
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
          subscription_name: 'Trial',
          subscription_end: now.plus({ months: 1 }).toFormat('yyyy-LL-dd'),
          subscription_max_user: 2,
          subscription_status: Subscription.STATUS_ONGOING,
        }

        // insert to payload
        const myRequest2 = new Payload
        myRequest2.status = 'request'
        myRequest2.url = 'Update Subscription to Sempoa ERP: ' + company.company_name + ' for ' + 'Trial' + ' ' + data.interval_subscription + ' Bulan'
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


        await trx.commit()
      })

      return response.json({
        code: 200,
        message: 'Berhasil menghubungkan antar Sempoa Services',
        is_subscription: false
      })
    } catch (error) {
      return response.status(400).json({
        code: 500,
        message: 'Gagal menghubungkan antar Sempoa Services',
      })
    }
  }

  @bind()
  public async reconnect({ request, response }, company: Company) {
    try {
      await Database.transaction(async (trx) => {
        const data = request.all()
        company.token = data.token
        company.created_by = "Sistem"
        company.updated_by = "Sistem"
        company.useTransaction(trx)
        await company.save()
        await trx.commit()
      })

      Logger.info('success reconnect')
    } catch (error) {
      Logger.warn(error)
    }
  }

}
