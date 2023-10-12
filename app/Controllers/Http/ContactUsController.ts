import Mail from '@ioc:Adonis/Addons/Mail'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Logger from '@ioc:Adonis/Core/Logger'
import ContactUsValidator from 'App/Validators/ContactUsValidator'


export default class ContactUsController {

  public async index({ view }: HttpContextContract) {
    return view.render("pages/contact-us/index")
  }

  public async sendContact({ request, response, session, auth }: HttpContextContract) {
    try {

      const data = await request.validate(ContactUsValidator)
      // TODO : Send To Email If Exist WhatSapp send it
      await Mail.sendLater((message) => {
        message
        .from('no-reply@sempoa.id', 'Sempoa.id')
        .to('admin@sempoa.id', 'Admin Sempoa')
        .subject('Message from Contact Us - Sempoa')
        .htmlView('emails/contact_us', {
          data: data,
          user: { fullName: 'Some Name' },
          url: 'https://your-app.com/verification-url',
        })
      })

      session.flash('success', 'Success Sending Message from Contact Us')
      return response.redirect().back()
    } catch (error) {
      Logger.warn('Error store company', { data: error.message })
      session.flash({ error: 'Opss! , Failed Sending Message from Contact Us', errors: error.messages, request: request.all() })
      return response.redirect().back();
    }

  }
}
