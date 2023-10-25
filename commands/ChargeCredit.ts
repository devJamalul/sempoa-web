import { BaseCommand } from '@adonisjs/core/build/standalone'

import { DateTime } from 'luxon'

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
    const {default: Payload } = await import('App/Models/Payload');
    const now = DateTime.now();
    const CompanyModel = await Company.findOrFail(8);
    const test = await CompanyModel.related('subscriptions').create({
      reference_number: 'Test',
      package_name: 'test',
      package_description: 'Test',
      max_users: 2,
      price: 3,
      status: Subscription.STATUS_PENDING_PAYMENT,
      start_date: now,
      end_date: now,
      is_recurring: true,
      interval: 'MONTH',
      interval_count: 2,
      created_by:'tes',
      updated_by: 'test',
    })
    test.status = Subscription.STATUS_ONGOING
    test.save();
    console.log(test.status)
    // TODO: Find All Subscription Ongoing at expired today
      // TODO: Charge Credit Total At fucntion
    // subscription.forEach( async item => {
     
    // });
    // // TODO: Send to xendit for charge
    // TODO: Change Status sempoa if success
    // this.logger.info(halo)
  }
}
