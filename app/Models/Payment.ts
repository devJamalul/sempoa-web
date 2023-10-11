import { DateTime } from 'luxon'
import { BaseModel, column, hasOne,HasOne } from '@ioc:Adonis/Lucid/Orm'
import Subscription from './Subscription'


export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public reference_number:string

  @column()
  public subscription_id:string

  @column()
  public price:number

  @column()
  public payment_type:string|null

  @column()
  public status:string|null

  @column()
  public created_by: string|null

  @column()
  public updated_by: string|null

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @hasOne(()=> Subscription, {
    foreignKey:'id',
    localKey:'subscription_id'
  })
  public subscription: HasOne<typeof Subscription>

  // Define a static method to generate the reference number
  public static async generateReferenceNumber(subscriptionId: number): Promise<string> {
    const lastPayment = await this.query()
      .where('subscription_id', subscriptionId)
      .orderBy('id', 'desc')
      .first()

    const subscriptionIdStr = subscriptionId.toString().padStart(4, '0')

    let incrementId: string
    const currentYear = DateTime.now().toFormat('yyyy')

    if (lastPayment) {
      const lastYear = DateTime.fromSQL(lastPayment.created_at.toString()).toFormat('yyyy')

      // If the last subscription is from the current year, increment the ID
      if (lastYear === currentYear) {
        incrementId = (parseInt(lastPayment.reference_number.split('/')[3]) + 1).toString().padStart(4, '0')
      } else {
        // If it's a new year, start the increment ID from 1
        incrementId = '0001'
      }
    } else {
      // If there are no previous subscriptions, start the increment ID from 1
      incrementId = '0001'
    }

    return `INV/${subscriptionIdStr}/${currentYear}/${incrementId}`
  }
}
