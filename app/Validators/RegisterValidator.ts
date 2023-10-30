import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) { }

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
    brand_name: schema.string.nullable([
      rules.minLength(4),
      rules.maxLength(191),
    ]),
    company_email: schema.string([
      rules.unique({ table: 'companies', column: 'email' }),
      rules.minLength(4),
      rules.maxLength(191),
      rules.email()
    ]),
    company_phone: schema.string([
      rules.unique({ table: 'companies', column: 'phone_number' }),
      rules.minLength(8),
      rules.maxLength(30),
    ]),
    company_npwp: schema.string.nullable([
      rules.minLength(4),
      rules.maxLength(191),
    ]),
    website: schema.string.nullable([
      rules.minLength(4),
      rules.maxLength(191),
    ]),
    country: schema.string([
      rules.minLength(3),
      rules.maxLength(191),
    ]),
    city: schema.string([
      rules.minLength(3),
      rules.maxLength(191),
    ]),
    company_ppn_status: schema.string(),
    fax: schema.string.nullable([
      rules.regex(/^[0-9,\(\)\#\*]+$/i),
      rules.minLength(9),
      rules.maxLength(30),
    ]),
    type: schema.string(),
    address: schema.string([
      rules.minLength(9),
      rules.maxLength(191),
    ]),
    // PIC
    pic_name: schema.string([
      rules.minLength(9),
      rules.maxLength(191),
    ]),
    phone_number: schema.string([
      rules.minLength(9),
      rules.maxLength(191),
    ]),
    pic_email: schema.string([
      rules.minLength(9),
      rules.maxLength(191),
      rules.email(),
    ]),
    password: schema.string([
      rules.minLength(8),
      rules.maxLength(191),
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
  public messages: CustomMessages = {
    // Requeired
    "company_name.required":"Nama Perusahaan Wajib Diisi!",
    "company_email.required":"Email Perusahaan Wajib Diisi!",
    "company_phone.required":"No Telepon Perusahaan Wajib Diisi!",
    "country.required":"Negara Wajib Diisi",
    "city.required":"Kota Wajib Diisi",
    "type.required":"Tipe Akun Wajib Diisi",
    "address.required":"Alamat Wajib Diisi",
    "pic_name.required":"Nama PIC Wajib Disi",
    "phone_number.required":"No Tlpn PIC wajib Diisi",
    "pic_email.required":"Email PIC Wajib Diisi",
    "password.required":"Password PIC Wajib Diisi",

  
    // Unique
    "company_name.unique" : "Nama Perusahaan Sudah Tersedia!",
    "company_email.unique" : "Email Perusahaan Sudah Tersedia!",
    "company_phone.unique" : "No Tlpn Perusahaan Sudah Tersedia!",
    
    // minxLenght
    minLength:"Minimal {{ options.minLength }} Huruf ",
    maxLength:"Maximal {{ options.minLength }} Huruf ",
    email:"Email Tidak Valid",

    // Regex
    "fax.regex":"Fax Tidak Valid"

    


  }
}
