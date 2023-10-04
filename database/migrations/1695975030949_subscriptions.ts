import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'subscriptions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('xendit_repl_id', 191).nullable().unique().comment('Xendit-generated Subscriptions plan ID, with prefix repl-xxx')
      table.string('reference_number', 191).nullable().unique
      table.integer('companyId').unsigned().nullable()
      table.foreign('companyId').references('companies.id')
      table.string('package_name', 191).nullable
      table.text('package_description').nullable
      table.integer('max_users').nullable()
      table.integer('price').nullable
      table.date('start_date').nullable
      table.date('end_date').nullable
      table.boolean('is_recurring').nullable().defaultTo(0)
      table.string('interval').nullable().comment('DAY, WEEK, MONTH')
      table.integer('interval_count').nullable
      table.string('status').nullable().comment('ongoing, pending payment, terminated').defaultTo('pending payment')
      table.text('note').nullable

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
