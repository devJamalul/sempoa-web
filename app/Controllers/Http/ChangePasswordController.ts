import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ChangePasswordValidator from 'App/Validators/ChangePasswordValidator'
import Logger from '@ioc:Adonis/Core/Logger'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User';

export default class ChangePasswordController {

    public async handle({ request, response,session, auth }: HttpContextContract) {
        try {
            const userSession = auth.user;
            const hashPassword = userSession?.password ?? '';
            const data = await request.validate(ChangePasswordValidator)
            if (!(await Hash.verify(hashPassword, data.current_password))) {
                session.flash('error', 'Your credentials is incorrect.')
                return response.redirect().back()
              }
            
            const user = await User.find(userSession?.id)
            if(user){
                user.password = data.new_password
                user.save()
            } 

            session.flash('success', 'Success Change Password')
        } catch (error) {
             Logger.warn('Error Update company', { data: error.message })
             session.flash({ change_password_fail:true,error: `Opss! , Fail Change Password `, errors: error.messages, request: request.all() })
            }
        return response.redirect().back();
    }
    
}
