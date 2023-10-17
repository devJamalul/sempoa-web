import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CompanyCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    company_name: schema.string([
      rules.unique({ table: 'companies', column: 'company_name' }),
      rules.minLength(4),
      rules.maxLength(191),
    ]),
    brand_name: schema.string.nullable(
      [
        rules.minLength(4),
        rules.maxLength(191),
      ]
    ),
    company_email: schema.string([
      rules.unique({ table: 'companies', column: 'email' }),
      rules.email()
    ]),
    company_phone: schema.string([
      rules.unique({ table: 'companies', column: 'phone_number' }),
      rules.minLength(8),
      rules.maxLength(30),
    ]),
    website: schema.string.nullable(
      [
        rules.minLength(4),
        rules.maxLength(191),
      ]
    ),
    is_taxable: schema.string(),
    company_fax_number: schema.string.nullable([
      rules.regex(/^[0-9,\(\)\#\*]+$/i)
    ]),
    company_country: schema.string([
      rules.maxLength(150),
    ]),
    company_city: schema.string([
      rules.maxLength(150),
    ]),
    account_type: schema.string(),
    company_address: schema.string.nullable(),
    pic_name: schema.string(),
    pic_phone: schema.string([
      rules.minLength(8),
      rules.maxLength(30),
    ]),
    pic_email: schema.string([
      rules.email(),
      rules.maxLength(255)
    ]),
    pic_password: schema.string([
      rules.minLength(8)
    ]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
