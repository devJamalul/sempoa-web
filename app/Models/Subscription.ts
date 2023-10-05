import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Company from './Company'
import Payment from './Payment'


export default class Subscription extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public xendit_repl_id:string

  @column()
  public reference_number:string

  @column()
  public company_id:number|null


  @column()
  public package_name:string|null


  @column()
  public package_description:string|null


  @column()
  public max_users:number|null


  @column()
  public price:number|null

  @column.date()
  public start_date:DateTime|null

  @column.date()
  public end_date:DateTime|null

  @column()
  public is_recurring:boolean|null

  @column()
  public interval:string|null

  @column()
  public interval_count:number


  @column()
  public status:string|null


  @column()
  public note:string|null

  @column()
  public created_by: string|null

  @column()
  public updated_by: string|null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Company,{
    foreignKey: 'company_id',
  })
  public company: BelongsTo<typeof Company>

  @hasMany(() => Payment, {
    localKey: 'id',
    foreignKey: 'subscription_id',
  })
  public payments: HasMany<typeof Payment>

}
