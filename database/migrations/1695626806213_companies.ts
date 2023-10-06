import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'companies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('xendit_customer_id', 191).nullable
      table.string('company_id', 191).nullable
      table.string('company_name', 191).index().unique()
      table.text('address').nullable()
      table.string('city', 191).nullable()
      table.string('country', 191).nullable()
      table.string('email', 191).nullable().unique()
      table.string('phone_number', 191).nullable().unique()
      table.string('pic_name', 191).nullable()
      table.string('pic_email', 191).nullable()
      table.string('pic_phone_number', 191).nullable()
      table.integer('referral_code').nullable()
      table.string('token', 191).nullable()
      table.integer('user_id').nullable().unsigned().references('users.id').onDelete('CASCADE')
      table.integer('is_verified').nullable().comment('0 - false, 1 - true').defaultTo(0)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('created_by', 191).nullable()
      table.string('updated_by', 191).nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
