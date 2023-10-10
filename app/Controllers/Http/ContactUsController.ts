import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Logger from '@ioc:Adonis/Core/Logger'
import ContactUsValidator from 'App/Validators/ContactUsValidator'


export default class ContactUsController {

    public async index({view}:HttpContextContract) {
        return view.render("pages/contact-us/index")
    }

    public async sendContact({request, response, session,auth}:HttpContextContract){
        try {

            const data = await request.validate(ContactUsValidator)
            // TODO : Send To Email If Exist WhatSapp send it

            session.flash('success', 'Success Created Company')
            return response.redirect().back()
          } catch (error) {
            Logger.warn('Error store company', { data: error.message })
            session.flash({ error: 'Opss! , Failed Create Company', errors : error.messages, request: request.all()})
            return response.redirect().back();
          }

    }
}
