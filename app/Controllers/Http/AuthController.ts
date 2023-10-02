import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async registerShow({ view }: HttpContextContract) {
    return view.render('auth/register');
  }

  public async loginShow({ view }: HttpContextContract) {
    return view.render('auth/login');
  }

  public async login({ request, response, auth, session }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    try {
      await auth.attempt(email, password)
    } catch (error) {
      session.flash('form', 'Your email or password is incorrect')
      return response.redirect().back()
    }

    return response.redirect().toRoute('home')
  }

  public async logout({ auth, response, session }) {
    try {
      await auth.logout()
      session.flash('success', 'You\'ve logged out successfully')
    } catch (error) {
      session.flash('error', 'Gagal logout!')
      return response.redirect().back()
    }

    return response.redirect().toRoute('login.show')
  }
}
