import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company';

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

  public async store({ request, response, session}: HttpContextContract) {
  }
}
