import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Company from './Company'


export default class Subscription extends BaseModel {
  public static readonly INTERVAL_DAY = 'DAY'
  public static readonly INTERVAL_WEEK = 'WEEK'
  public static readonly INTERVAL_MONTH = 'MONTH'

  public static readonly STATUS_ONGOING = 'ongoing'
  public static readonly STATUS_PENDING_PAYMENT = 'pending payment'
  public static readonly STATUS_TERMINATED = 'terminated'

  public static readonly PACKAGE_TRIAL = 'Trial'
  public static readonly PACKAGE_MINIMALIST = 'Minimalist'
  public static readonly PACKAGE_BASIC = 'Basic'
  public static readonly PACKAGE_MEDIUM = 'Medium'
  public static readonly PACKAGE_ENTERPRISE = 'Enterprise'


  public static packageActive =async (company:Company) => {
    const subscriptionActive = await
    Subscription.
    query()
    .where('company_id',company.id)
    .where('status',Subscription.STATUS_ONGOING)
    .first();
    return subscriptionActive ? subscriptionActive.package_name : Subscription.PACKAGE_TRIAL
  }


  @column({ isPrimary: true })
  public id: number

  @column()
  public xendit_repl_id: string

  @column()
  public reference_number: string

  @column()
  public company_id: number | null

  @column()
  public package_name: string | null

  @column()
  public package_description: string | null

  @column()
  public max_users: number | null

  @column()
  public price: number

  @column.date()
  public start_date: DateTime | null

  @column.date()
  public end_date: DateTime | null

  @column()
  public is_recurring: boolean | null

  @column()
  public interval: string | null

  @column()
  public interval_count: number

  @column()
  public status: string | null

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

  @belongsTo(() => Company, {
    foreignKey: 'company_id'
  })
  public company: BelongsTo<typeof Company>

  // Define a static method to generate the reference number
  public static async generateReferenceNumber(companyId: number): Promise<string> {
    const companyIdStr = companyId.toString().padStart(4, '0')
    const currentYear = DateTime.now().toFormat('yyyy')

    // Check if there are any subscriptions for the current year
    const lastSubscriptionForYear = await this.query()
      .where('company_id', companyId)
      .whereRaw('YEAR(created_at) = ?', [currentYear])
      .orderBy('id', 'desc')
      .first()

    const incrementId = lastSubscriptionForYear
      ? (lastSubscriptionForYear.id + 1).toString().padStart(4, '0')
      : '0001'

    return `SUB/${companyIdStr}/${currentYear}/${incrementId}`
  }
}
