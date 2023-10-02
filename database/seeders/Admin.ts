import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class extends BaseSeeder {
  public async run() {
    // admin
    await User.createMany([
      {
        name: 'Admin Sempoa',
        email: 'admin@sempoa.id',
        role: 'Admin',
        password: (await Hash.make('password')).toString()
      }
    ])

  }
}
