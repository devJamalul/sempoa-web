import Company from 'App/Models/Company'
import Factory from '@ioc:Adonis/Lucid/Factory'
import UserFactory from './UserFactory'

export default Factory.define(Company, ({ faker }) => {
  return {
    company_name: faker.company,
    brand_name: faker.company,
    email: faker.internet.email,
    phone_number: faker.phone,
    address: faker.location,
    city: faker.location,
    country: 'Indonesia',
    status: 1,
    vat_enabled: 1,
    tax_id_number: faker.number,
    type: 2,
    created_by: 'System',
    created_at: faker.date
  }
})
  .relation('users', () => UserFactory)
  .before('makeStubbed', (_, model) => {
    model.id = uuid.v4()
  })
  .build()
