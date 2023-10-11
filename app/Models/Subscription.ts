import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Company from './Company'
import Payment from './Payment'


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
  public price: number | null

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

  @hasMany(() => Payment, {
    localKey: 'id',
    foreignKey: 'subscription_id',
  })
  public payments: HasMany<typeof Payment>

  // Define a static method to generate the reference number
  public static async generateReferenceNumber(companyId: number): Promise<string> {
    const lastSubscription = await this.query()
      .where('company_id', companyId)
      .orderBy('id', 'desc')
      .first()

    const companyIdStr = companyId.toString().padStart(4, '0')

    let incrementId: string
    const currentYear = DateTime.now().toFormat('yyyy')

    if (lastSubscription) {
      const lastYear = DateTime.fromSQL(lastSubscription.created_at.toString()).toFormat('yyyy')

      // If the last subscription is from the current year, increment the ID
      if (lastYear === currentYear) {
        incrementId = (parseInt(lastSubscription.reference_number.split('/')[3]) + 1).toString().padStart(4, '0')
      } else {
        // If it's a new year, start the increment ID from 1
        incrementId = '0001'
      }
    } else {
      // If there are no previous subscriptions, start the increment ID from 1
      incrementId = '0001'
    }

    return `SUB/${companyIdStr}/${currentYear}/${incrementId}`
  }
}
