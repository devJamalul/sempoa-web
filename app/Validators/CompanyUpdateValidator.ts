import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CompanyUpdateValidator {
  constructor(protected ctx: HttpContextContract) {
  }

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
      rules.unique({ table: 'companies', column: 'company_name',whereNot:this.ctx.params}),
      rules.minLength(4),
      rules.maxLength(191),
    ]),
    company_email: schema.string([
      rules.unique({ table: 'companies', column: 'email' , whereNot:this.ctx.params }),
      rules.minLength(4),
      rules.maxLength(191),
      rules.email()
    ]),
    company_phone: schema.string([ 
      rules.unique({ table: 'companies', column: 'phone_number',whereNot:this.ctx.params }), 
      rules.minLength(8),
      rules.maxLength(30),]
    ),
    company_country: schema.string([
        rules.minLength(3),
        rules.maxLength(191),
      ]),
    company_city: schema.string([
      rules.minLength(3),
      rules.maxLength(191),
    ]),
    company_address: schema.string.nullable(),
    pic_name: schema.string(),
    pic_phone: schema.string([
      rules.mobile({
        locale:['id-ID']
      })
    ]),
    pic_email: schema.string([
      rules.email()
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
