import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  public async index({ view }: HttpContextContract) {
    return view.render('landing-page')
  }
  
  public async about({ view }: HttpContextContract) {
    return view.render('landing-page')
  }
}
