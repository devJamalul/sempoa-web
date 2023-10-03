import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Subscription from './Subscription'

export default class Company extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public xendit_customer_id: string|null

  @column()
  public company_id: string|null

  @column()
  public company_name: string

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
  public created_by: string|null

  @column()
  public updated_by: string|null


  @column()
  public is_verified:boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User,{
    foreignKey:'referral_code',
    localKey:'referral_code',
  })
  public users: HasMany<typeof User>

  @hasMany(() => Subscription,{
    localKey: 'id',
    foreignKey: 'company_id',
  })
  public subscriptions: HasMany<typeof Subscription>
}
