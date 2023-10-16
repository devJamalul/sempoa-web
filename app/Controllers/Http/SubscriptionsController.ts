import { bind } from '@adonisjs/route-model-binding';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company';
import Subscription from 'App/Models/Subscription';
import { inspect } from 'util';

export default class SubscriptionsController {
  private title: string = 'Subscription';

  public async index({ view }: HttpContextContract) {
    const title = this.title
    const subscriptions = await Subscription.query().preload('company').orderBy('status', 'asc')
    return view.render('pages/subscription/index', { title, subscriptions });
  }

  public async create({ }: HttpContextContract) { }

  public async store({ }: HttpContextContract) { }

  @bind()
  public async show({ view }, company: Company) {
    const title = company.company_name
    const subscriptions = await Subscription.query()
      .where('company_id', company.id)
      .orderBy('status', 'asc')
    return view.render('pages.subscription.view', { title, subscriptions })
  }

  @bind()
  public async edit({ view }, company: Subscription) {
    const title = company.reference_number
    const subscription = company
    const price = company.price.toLocaleString('id-ID')
    const perusahaan = await Company.find(company.company_id)
    return view.render('pages.subscription.edit', { title, subscription, perusahaan, price })
   }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
