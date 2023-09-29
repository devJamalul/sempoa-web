import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('reference_number', 191).nullable().unique
      table.integer('subscription_id').unsigned().nullable()
      table.foreign('subscription_id').references('subscriptions.id')
      table.integer('price').unsigned().nullable
      table.string('payment_type').nullable().comment('Credit Cards, eWallets, PayLater, QR Codes, Direct Debit, Virtual Accounts')
      table.string('status').nullable().defaultTo('pending').comment('paid, pending, failed, voided')

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
