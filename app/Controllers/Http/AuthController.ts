import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Logger from '@ioc:Adonis/Core/Logger'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import Hash from '@ioc:Adonis/Core/Hash'
import Database from '@ioc:Adonis/Lucid/Database';
import Company from 'App/Models/Company';
import { DateTime } from 'luxon';
import RegisterValidator from 'App/Validators/RegisterValidator';
import Subscription from 'App/Models/Subscription';
import axios from 'axios';
import sempoa from 'Config/sempoa';

export default class AuthController {
  public async registerShow({ view }: HttpContextContract) {
    return view.render('auth/register');
  }

  public async register({ request, response, auth, session }: HttpContextContract) {
    try {

      // return request.all();
      await Database.transaction(async (trx) => {
        const data = await request.validate(RegisterValidator)
        const user = auth.user
        const now = DateTime.now()

        const company = new Company()
        company.company_name = data.company_name;
        company.address = data.company_name;
        company.city = data.company_name;
        company.country = data.company_name;
        company.email = data.company_name;
        company.phone_number = data.company_name;
        company.pic_name = data.company_name;
        company.pic_email = data.company_name;
        company.pic_phone_number = data.company_name;
        company.created_by = user?.name ?? 'Sistem';
        company.updated_by = user?.name ?? 'Sistem';

        company.useTransaction(trx)
        await company.save()

        await company.related('subscriptions').create({
          package_name: Subscription.PACKAGE_TRIAL,
          package_description: Subscription.PACKAGE_TRIAL + " 2 user",
          max_users: 2,
          price: 0,
          start_date: now,
          end_date: now.plus({ months: 1 }),
          status: Subscription.STATUS_ONGOING
        })

        // send to ERP
        const prepareData = {
          company_name: data.company_name,
          brand_name: data.brand_name,
          address: data.address,
          city: data.city,
          country: data.country,
          company_number: data.company_phone,
          email: data.company_email,
          fax: data.fax,
          tax_id_number: data.company_npwp,
          website: data.website,
          vat_enabled: data.company_ppn_status,
          type: data.type,

          pic_name: data.pic_name,
          pic_email: data.pic_email,
          password: data.password,
          phone_number: data.phone_number,
        }

        await axios.post(`${sempoa.api}/v1/auth/register/signup`, prepareData)
        .then(function (response) {
          // handle success
          var responseData = response.data
          company.token = responseData.token
          company.save()
          session.flash('success', responseData.pesan)
        })
        .catch (function (error) {
          // handle error
          throw new Error('Error register to ERP: ' + error.message)
        })
        .finally(function () {
          // always executed
        });
      })

      return response.redirect().toRoute('register.show')
    } catch (error) {
      console.log(error.message)
      Logger.warn(error.message)
      session.flash({ error: `Opss! , ${error.message}`, errors: error.messages, request: request.all() })
      return response.redirect().toRoute('register.show')
    }
  }

  public async loginShow({ view }: HttpContextContract) {
    return view.render('auth/login');
  }

  public async login({ request, response, auth, session }: HttpContextContract) {
    try {
      const validationSchema = schema.create({
        email: schema.string({}, [rules.email()]),
        password: schema.string()
      })
      const data = await request.validate({
        schema: validationSchema
      })

      const user = await User
        .query()
        .where('email', data.email)
        .firstOrFail()

      if (!(await Hash.verify(user.password, data.password))) {
        session.flash('error', 'Your credentials is incorrect.')
        return response.redirect().back()
      }

      await auth.use('web').login(user)
      return response.redirect().toRoute('dashboard')
    } catch (error) {
      Logger.warn('Error login: ' + error.message)
      session.flash('error', 'Your credentials is incorrect')
      return response.redirect().toRoute('login.show')
    }
  }

  public async logout({ auth, response, session }) {
    try {
      await auth.use('web').logout()
      session.flash('success', 'You\'ve logged out successfully')
      return response.redirect().toRoute('home')
    } catch (error) {
      Logger.warn('Error logout: ' + error.message)
      session.flash('error', 'Logging out failed')
      return response.redirect().back()
    }
  }
}
