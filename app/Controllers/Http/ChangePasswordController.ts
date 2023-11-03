import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ChangePasswordValidator from 'App/Validators/ChangePasswordValidator'
import Logger from '@ioc:Adonis/Core/Logger'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User';
import Database from '@ioc:Adonis/Lucid/Database';

export default class ChangePasswordController {

  public async handle({ request, response, session, auth }: HttpContextContract) {
    const trx = await Database.transaction()
    try {
      const userSession = auth.user;
      if(!userSession) throw new Error('User not found')
      const hashPassword = userSession.password ?? '';
      const data = await request.validate(ChangePasswordValidator)
      if (!(await Hash.verify(hashPassword, data.current_password))) {
        session.flash('error', 'Your credentials is incorrect.')
        return response.redirect().back()
      }

      const user = await User.find(userSession?.id)
      if (user) {
        user.password = data.new_password
        await user.save()
      }

      await trx.commit()
      session.flash('success', 'Success Change Password')
    } catch (error) {
      await trx.rollback()
      Logger.warn('Error change password', { data: error.message })
      session.flash({ change_password_fail: true, error: `Opss! , Fail Change Password `, errors: error.messages, request: request.all() })
    }
    return response.redirect().back();
  }

}
