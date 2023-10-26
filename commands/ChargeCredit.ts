import { BaseCommand } from '@adonisjs/core/build/standalone'

import { DateTime } from 'luxon'

import Database from '@ioc:Adonis/Lucid/Database';

import Logger from '@ioc:Adonis/Core/Logger';

export default class ChargeCredit extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'charge:credit'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Pengambilan Uang Dengan Metode Credit Card'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest` 
     * afterwards.
     */
    loadApp: true

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call 
     * `node ace generate:manifest` afterwards.
     */
  }

  public async run() {

    const {default: Subscription } = await import('App/Models/Subscription');
    const {default: Company } = await import('App/Models/Company');
    const {default: Payment } = await import('App/Models/Payment');
    const {calculateMaxUsers, calculatePlan,} = await import('Helpers/calculatePlanHelper');
    const {default: ChargeCreditCard } = await import('App/Services/ChargeCreditCard');
    const {default: ErpIntegartion } = await import('App/Services/ErpIntegartion');


    
    const expiredToday:DateTime = DateTime.now();
    const nextDay: number = 1;
    const nextToStartDate:DateTime = DateTime.now().plus({day:nextDay});

    const subscriptions = await Subscription.query()
    .where('status',Subscription.STATUS_ONGOING)
    .whereNot('package_name',Subscription.PACKAGE_TRIAL)
    .where('end_date',expiredToday.toFormat('yyyy-LL-dd'))

    for (let index = 0; index < subscriptions.length; index++) {
      const item = subscriptions[index];
      const trx = await Database.transaction()
      try {
        // Start Depedency
      const company = await Company.findOrFail(item.company_id);
      const packageActive = item.package_name
      const feePayByCustomer: number = calculatePlan(item.interval_count, packageActive, packageActive,nextDay)
      const maxUser: number = calculateMaxUsers(packageActive)
      item.status = Subscription.STATUS_TERMINATED
      item.save()
   

      const subscription = await company.related('subscriptions').create({
        reference_number: await Subscription.generateReferenceNumber(company.id),
        package_name: item.package_name,
        package_description: item.package_name + ' ' + item.interval_count + ' Bulan',
        max_users: maxUser,
        price: feePayByCustomer,
        status: Subscription.STATUS_PENDING_PAYMENT,
        start_date: nextToStartDate,
        end_date: (item.interval_count > 1)
          ? nextToStartDate.plus({ months: item.interval_count }).endOf('month')
          : nextToStartDate.endOf('month'),
        is_recurring: true,
        interval: 'MONTH',
        interval_count: item.interval_count,
        created_by: 'sistem',
        updated_by: 'sistem',
      })


      const payment = new Payment
      payment.reference_number = await Payment.generateReferenceNumber()
      payment.subscription_id = subscription.id
      payment.amount = subscription.price
      payment.status = Payment.STATUS_PENDING
      payment.created_by = company.pic_name
      payment.updated_by = company.pic_name
      await payment.save()


      // end depedency

      const chargeCreditCard = new ChargeCreditCard();
      chargeCreditCard.company = company;
      chargeCreditCard.payment = payment;
      chargeCreditCard.subcription = subscription;

      const payToXendit = await chargeCreditCard.withXendit(feePayByCustomer)
      if(payToXendit.status == 'failed') throw new Error(payToXendit.message)

      subscription.status = Subscription.STATUS_ONGOING
      subscription.save();

      const erpIntegration = new ErpIntegartion()
      erpIntegration.company = company;
      erpIntegration.subscription = subscription;
      erpIntegration.updateSubscription()

      Logger.info(`Success For Recurring For Invoice : ${payment.reference_number}`)
      await trx.transaction()
      } catch (error) {
        console.log(error)
        Logger.warn(`Failed For Recurring: ${error.message}`)
        await trx.rollback()
      }
      
    }
  }
}
