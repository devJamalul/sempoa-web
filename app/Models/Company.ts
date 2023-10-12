import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Subscription from './Subscription'

export default class Company extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number | null

//   @column()
//   public xendit_customer_id: string | null

  @column()
  public masked_card_number: string | null

  @column()
  public token_id: string | null

  @column()
  public token_auth_id: string | null

  @column()
  public company_id: string | null

  @column()
  public company_name: string | null

  @column()
  public address: string | null

  @column()
  public city: string | null

  @column()
  public country: string | null

  @column()
  public email: string | null

  @column()
  public phone_number: string | null

  @column()
  public pic_name: string | null

  @column()
  public pic_email: string | null

  @column()
  public pic_phone_number: string | null

  @column()
  public referral_code: number | null

  @column()
  public token: string | null

  @column()
  public created_by: string | null

  @column()
  public updated_by: string | null

  @column()
  public is_verified: boolean

  @column()
  public is_active:boolean

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @belongsTo(() => User, {
    foreignKey: 'user_id'
  })
  public user: BelongsTo<typeof User>

  @hasMany(() => Subscription, {
    foreignKey: 'company_id'
  })
  public subscriptions: HasMany<typeof Subscription>
}
