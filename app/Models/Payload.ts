import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Payload extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: string | null

  @column()
  public url: string | null

  @column()
  public payload: string | null

  @column()
  public created_by: string | null

  @column()
  public updated_by: string | null

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
