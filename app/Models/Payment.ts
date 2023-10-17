import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Payment extends BaseModel {
  public static readonly STATUS_PENDING = 'PENDING'
  public static readonly STATUS_CAPTURED = 'CAPTURED'
  public static readonly STATUS_AUTHORIZED = 'AUTHORIZED'
  public static readonly STATUS_REVERSED = 'REVERSED'
  public static readonly STATUS_FAILED = 'FAILED'

  @column({ isPrimary: true })
  public id: number

  @column()
  public reference_number: string

  @column()
  public subscription_id: number

  @column()
  public amount: number

  @column()
  public status: string

  @column()
  public note: string | null

  @column()
  public created_by: string | null

  @column()
  public updated_by: string | null

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  // Define a static method to generate the reference number
  public static async generateReferenceNumber(): Promise<string> {
    const currentYear = DateTime.now().toFormat('yyyy')

    // Check if there are any subscriptions for the current year
    const lastSubscriptionForYear = await this.query()
      // .where('subscription_id', subscriptionId)
      .whereRaw('YEAR(created_at) = ?', [currentYear])
      .orderBy('id', 'desc')
      .first()

    const incrementId = lastSubscriptionForYear
      ? (lastSubscriptionForYear.id + 1).toString().padStart(4, '0')
      : '0001'

    var today = new Date();
    var date = (today.getMonth() + 1).toString().padStart(2, '0') + today.getDate().toString().padStart(2, '0');
    var time = today.getHours().toString().padStart(2, '0') + today.getMinutes().toString().padStart(2, '0') + today.getSeconds().toString().padStart(2, '0');
    var dateTime = date + time;

    // return `INV/${subscriptionIdStr}/${currentYear}/${incrementId}`
    return `INV/${currentYear}/${dateTime}/${incrementId}`
  }
}
