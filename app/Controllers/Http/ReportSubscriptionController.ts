import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ReportSubscriptionController {


    public async index({view}: HttpContextContract){
        return view.render('pages.report.subscription');
    }

}
