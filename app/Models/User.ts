import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string


  @column({
    serializeAs: null
  })
  public email_verified_at: string

  @column({
    prepare: (value: string) => Hash.make(value),
    serializeAs: null
  })
  public password: string

  @column()
  public role: string

  @column({
    serializeAs: null
  })
  public phone_number: string

  @column()
  public referral_code: number

  @column()
  public remember_token: string

  @column()
  public created_by: string|null

  @column()
  public updated_by: string|null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
