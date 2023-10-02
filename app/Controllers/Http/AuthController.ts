import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async registerShow({ view }: HttpContextContract) {
    return view.render('auth/register');
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

      const user = await User.findBy('email', data.email)
      if (!user) {
        session.flash('error', 'Your credential is incorrect')
        return response.redirect().back()
      }

      const passwordMatch = Hash.verify(user.password, data.password)
      if (!passwordMatch) {
        session.flash('error', 'Your credentials is incorrect')
        return response.redirect().back()
      }

      await auth.use('web').login(user)
      return response.redirect().toRoute('home')
    } catch (error) {
      session.flash('error', error.message + 'Your email or password is incorrect')
      return response.redirect().toRoute('login.show')
    }
  }

  public async logout({ auth, response, session }) {
    try {
      await auth.logout()
      session.flash('success', 'You\'ve logged out successfully')
      return response.redirect().toRoute('home')
    } catch (error) {
      session.flash('error', 'Gagal logout!')
      return response.redirect().back()
    }
  }
}
