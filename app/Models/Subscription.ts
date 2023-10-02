import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Company from './Company'


export default class Subscription extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public xendit_repl_id:string

  @column()
  public reference_number:string

  @column()
  public company_id:number


  @column()
  public package_name:string|null


  @column()
  public package_description:string|null


  @column()
  public max_users:number|null


  @column()
  public price:number|null

  @column()
  public start_date:DateTime|null

  @column()
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


  @hasMany(()=> Company, {
    foreignKey:'id',
    localKey:'company_id'
  })
  
  public companies: HasMany<typeof Company>


}
