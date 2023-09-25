import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Company from './Company'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public company_id: string

  @column()
  public name: string

  @column()
  public role: string

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
  public status: number

  @column({
    serializeAs: null
  })
  public title: string

  @column({
    serializeAs: null
  })
  public job: string

  @column({
    serializeAs: null
  })
  public phone_number: string

  @column({
    serializeAs: null
  })
  public address: string

  @column({
    serializeAs: null
  })
  public created_by: string

  @column({
    serializeAs: null
  })
  public updated_by: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Company)
  public company: BelongsTo<typeof Company>
}
