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
import sempoa from 'Config/sempoa';


Route.get('/', 'HomeController.index').as('home')

Route.get('/about', 'HomeController.about').as('home.about')

Route.get('/plans/:id(token)','PlansController.index').as('plan.index')

Route.get("/checkout/:plan/:id(token)",'PlansController.checkoutPlanShow')
.where('plan',/Minimalist|Basic|Medium/)
.as('checkout.index');

Route.get('checkout/message',function({view}){
    return view.render('pages/plans/message-checkout',{ urlSempoa:sempoa.url});
}).as('checkout.message')
Route.post('checkout/:id(token)','PlansController.checkoutPlan').as('checkout.store');


Route.get("contact-us",'ContactUsController.index').as('contact-us.index');
Route.post('contact-us','ContactUsController.sendContact').as('contact-us.send')

Route.group(() => {
  Route.get('/register', 'AuthController.registerShow').as('register.show')
  Route.post('/register', 'AuthController.register').as('register')

  Route.get('/register/success',function({view}){
    return view.render('auth/message',{ urlSempoa:sempoa.url});
}).as('register.message')

  Route.get('/adminustrator', 'AuthController.loginShow').as('login.show')
  Route.post('/adminustrator', 'AuthController.login').as('login')
}).middleware(['guest'])

Route.group(() => {
  Route.get('/dashboard', 'DashboardController.index').as('dashboard')

  Route.resource('companies', 'CompaniesController')
  Route.put('companies/update-status/:id','CompaniesController.statusUpdate').as('companies.update.status')

  Route.resource('subscriptions', 'SubscriptionsController')
  .paramFor('subscriptions', 'company')

  Route.post('/logout', 'AuthController.logout').as('logout')
}).middleware(['auth'])

