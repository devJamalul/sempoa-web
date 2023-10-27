import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Subscription from 'App/Models/Subscription';
import ReportSubscriptionValidator from 'App/Validators/ReportSubscriptionValidator';
import xlsx from 'xlsx'

export default class ReportSubscriptionController {


    public async index({view}: HttpContextContract){
        return view.render('pages.report.subscription');
    }

    public async export({request, response, session }:HttpContextContract){
    
        try {
            const data = await request.validate(ReportSubscriptionValidator)
            const startDate = {
                month:data.start_month,
                year:data.start_year
            };

            const endDate = {
                month:data.end_month,
                year:data.end_year
            };

            const subscription = await Subscription.query()
            .preload('company')
            .whereRaw(`MONTH(created_at) BETWEEN ${startDate.month} AND ${endDate.month}`)
            .whereRaw(`YEAR(created_at) BETWEEN ${startDate.year} AND ${endDate.year}`)
            
            if(subscription.length<=0) throw new Error('Opps !,Data Not Found')
            
            const transformSubscription = subscription.map((item)=>({
                'No. Invoice': item.reference_number,
                'Company': item.company.company_name,
                'Package': item.package_name,
                'Package Description': item.package_description,
                'Price': item.price,
                'Start Subscription': item.start_date?.toFormat('yyyy LLL dd'),
                'End Subscription': item.end_date?.toFormat('yyyy LLL dd')
            })) 

            const fileName = `report_subscription.xlsx`
            const worksheet = xlsx.utils.json_to_sheet(transformSubscription) 
            const workbook = xlsx.utils.book_new()
            xlsx.utils.book_append_sheet(workbook, worksheet, 'Data Sheet')
      
            const buffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'buffer'})
            response.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8')
            response.header('Content-Disposition', `attachment; filename=${fileName}`)
            return response.send(Buffer.from(buffer))
            
        } catch (error) {        
            session.flash({ error: error.message })
            return response.redirect().toRoute('report.subscription.index')
        }
    }

}
