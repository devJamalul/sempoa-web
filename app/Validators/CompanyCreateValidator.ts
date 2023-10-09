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
    company_name: schema.string(),
    brand_name: schema.string.nullable(),
    company_email: schema.string([
      rules.email()
    ]),
    company_phone: schema.string(),
    website: schema.string.nullable(),
    is_taxable: schema.string(),
    company_fax_number: schema.string.nullable(),
    company_country: schema.string(),
    company_city: schema.string(),
    account_type: schema.string(),
    company_address: schema.string(),
    pic_name: schema.string(),
    pic_phone: schema.string(),
    pic_email: schema.string([
      rules.email()
    ]),
    pic_password: schema.string(),
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
