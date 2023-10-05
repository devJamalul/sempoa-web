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
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(()=> Subscription, {
    foreignKey:'id',
    localKey:'subscription_id'
  })
  public subscription: HasOne<typeof Subscription>

}
