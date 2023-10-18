import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    // admin
    await User.createMany([
      {
        name: 'Admin Sempoa',
        email: 'admin@sempoa.id',
        role: 'Admin',
        password: 'password'
      }
    ])

  }
}
