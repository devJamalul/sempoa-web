import { bind } from '@adonisjs/route-model-binding';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company';
import Subscription from 'App/Models/Subscription';
import { inspect } from 'util';

export default class SubscriptionsController {
  private title: string = 'Subscription';

  public async index({ view }: HttpContextContract) {
    const title = this.title
    const subscriptions = await Subscription.query().select('id', 'company_id', 'package_name', 'status').preload('company').orderBy('status', 'asc')
    return view.render('pages/subscription/index', { title, subscriptions });
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  @bind()
  public async show({ view }, company: Company) {
    return inspect(company)
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
