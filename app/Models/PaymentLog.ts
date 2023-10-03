import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Payment from './Payment'



export default class PaymentLog extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public payment_id:number|null

  @column()
  public type:string|null

  @column()
  public content:string|null


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> Payment,{
    foreignKey:'id',
    localKey:'payment_id'
  })
  public payments: HasMany<typeof Payment>

}
