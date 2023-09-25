import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import Hash from '@ioc:Adonis/Core/Hash'

export default Factory.define(User, ({ faker }) => {
  return {
    name: faker.person.firstName,
    email: faker.internet.email,
    role: 'Customer',
    email_verified_date: faker.date,
    password: Hash.make('password'),
    status: 1,
    created_by: 'System',
    created_at: faker.date
  }
}).build()
