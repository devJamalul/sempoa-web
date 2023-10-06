/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('landing-page')
}).as('home')

Route.get('/about', async ({ view }) => {
  return view.render('landing-page')
})

Route.get('/info', () => {
  return 'Hello world'
})

Route.group(() => {
  // Route.get('/', 'HomeController.index').as('home')

  Route.get('/register', 'AuthController.registerShow').as('register.show')

  Route.get('/adminustrator', 'AuthController.loginShow').as('login.show')
  Route.post('/adminustrator', 'AuthController.login').as('login')
}).middleware(['guest'])

Route.group(() => {
  Route.get('/dashboard', 'DashboardController.index').as('dashboard')

  Route.resource('companies', 'CompaniesController')
  Route.put('companies/update-status/:id','CompaniesController.statusUpdate').as('companies.update.status')

  Route.post('/logout', 'AuthController.logout').as('logout')
}).middleware(['auth'])

