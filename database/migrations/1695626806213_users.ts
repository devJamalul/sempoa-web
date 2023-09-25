import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('company_id', 36).nullable()
      table.foreign('company_id').references('companies.id')
      table.string('name', 191).nullable()
      table.string('role', 191).nullable().defaultTo('Customer').comment('Customer, Sales, Admin')
      table.string('email', 191).nullable().unique
      table.timestamp('email_verified_at', { useTz: true }).nullable
      table.string('password', 191).nullable()
      table.integer('status', 1).nullable().comment('0 New, 1 Active, 2 Inactive')
      table.string('title', 191).nullable()
      table.string('job', 191).nullable()
      table.string('phone_number', 191).nullable()
      table.text('address').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('created_by', 191).nullable()
      table.string('updated_by', 191).nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
