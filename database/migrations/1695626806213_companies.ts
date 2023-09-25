import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'companies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 36).primary()
      table.string('company_name', 191).index().unique()
      table.string('brand_name', 191).nullable().unique()
      table.string('email', 191).nullable().unique()
      table.string('phone_number', 191).nullable().unique()
      table.text('address').nullable()
      table.string('city', 191).nullable()
      table.string('country', 191).nullable()
      table.string('logo', 191).nullable()
      table.string('tax_id_number', 191).nullable().unique()
      table.string('fax', 191).nullable()
      table.string('website', 191).nullable().unique()
      table.boolean('vat_enabled').nullable()
      table.integer('status').nullable().comment('0 new, 1 active, 2 inactive, 3 on hold, 4 deleted')
      table.integer('type').nullable().comment('1 untuk UMKM, 2 untuk Enterprise')
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
