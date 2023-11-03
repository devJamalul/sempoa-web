import { faker } from '@faker-js/faker'
import { test } from '@japa/runner'
import Company from 'App/Models/Company'
import Payment from 'App/Models/Payment'
import Subscription from 'App/Models/Subscription'
import ChargeCreditCard from 'App/Services/ChargeCreditCard'
import ErpIntegartion from 'App/Services/ErpIntegartion'
import { appUrl } from 'Config/app'
import { calculateMaxUsers, calculatePlan } from 'Helpers/calculatePlanHelper'
import { responseSave } from 'Helpers/payloadHelper'
import { DateTime } from 'luxon'
import Logger from '@ioc:Adonis/Core/Logger'


test.group('Subscription',()=>{
  const companyDummy = {
    company_name:faker.company.name(),
    brand_name:faker.string.sample(10),
    company_email:`${faker.word.sample(5)}_${faker.word.sample(10)}@gmail.com`,
    company_phone:`0895${faker.number.int({min:10,max:99})}${faker.number.int({min:10,max:99})}91`,
    company_npwp:`${faker.number.int({min:111111111,max:999999999})}`,
    company_website:`www.${faker.company.buzzPhrase()}.org`,
    company_contry:'Indonesia',
    company_city:'Jakarta Barat',
    company_fax:`${faker.number.int({min:1111111111,max:9999999999})}`,
    company_address:faker.lorem.paragraph(1),
    company_type:'Korporasi',
    pic_name:faker.person.fullName(),
    pic_email:`${faker.person.lastName()}_${faker.word.adverb(5)}@gmail.com`,
    pic_phone:`0895${faker.number.int({min:10,max:99})}${faker.number.int({min:10,max:99})}91`,
    password:'password',


  }
  
  test('display welcome page to register', async ({ visit }) => {

    const page = await visit(appUrl)
    await page.getByRole('navigation').getByRole('link', { name: 'Coba Gratis 14 Hari' }).click()
    await page.waitForLoadState();
    await page.assertPath('/register')
  })
  
  test(`Register Company ${companyDummy.company_name} and email is ${companyDummy.company_email}`, async ({ visit }) => {
    const page = await visit(`${appUrl}/register`)
    await page.fill('#company_name',companyDummy.company_name)
    await page.fill('#brand_name',companyDummy.brand_name)
    await page.fill('#company_email',companyDummy.company_email)
    await page.fill('#company_phone',companyDummy.company_phone)
    await page.fill('#company_npwp',companyDummy.company_npwp)
    await page.fill('#company_website',companyDummy.company_website)
    await page.fill('#company_country',companyDummy.company_contry)
    await page.fill('#company_city',companyDummy.company_city)
    await page.fill('#fax',companyDummy.company_fax)
    await page.fill('#company_address',companyDummy.company_address)
    await page.fill('#pic_name',companyDummy.pic_name)
    await page.fill('#phone_number',companyDummy.pic_phone)
    await page.fill('#pic_email',companyDummy.pic_email)
    await page.fill('#password',companyDummy.password)
    await page.selectOption('#company_account_type',companyDummy.company_type)
    await page.getByRole('button',{'name':'Coba Gratis'}).click();
    await page.waitForLoadState();
    await page.screenshot({ path: 'public/test/register.png', fullPage: true });
    await page.assertPath('/register/success')
  })

  test(`plans list by company ${companyDummy.company_name} and email is ${companyDummy.company_email}`,async({visit})=>{
    const company = await Company.findByOrFail('email',companyDummy.company_email)
    const page = await visit(`${appUrl}/plans/${company.token}`)
    await page.waitForLoadState();
    await page.screenshot({ path: 'public/test/plans_list.png', fullPage: true });
    await page.assertUrl(`${appUrl}/plans/${company.token}`);
  })

  test(`checkout page minimalist by company ${companyDummy.company_name} and email is ${companyDummy.company_email} charge with card id 5200000000001005`,async({ visit })=>{
    const company = await Company.findByOrFail('email',companyDummy.company_email)
    const page = await visit(`${appUrl}/checkout/Minimalist/${company.token}`)
    await page.fill("#credit_card_number",'5200000000001005')
    await page.fill("#expiration",'12/30');
    await page.fill("#secure_code",'123');
    await page.evaluate('document.getElementById("yearNumber").setAttribute("value", "2023")')
    await page.evaluate('document.getElementById("monthNumber").setAttribute("value", "12")')
    await page.click("#pay");
    await page.waitForTimeout(16000)
    await page.screenshot({ path: 'public/test/plans_checkout.png', fullPage: true });
    await page.assertUrl(`${appUrl}/checkout/message`);
  })

  test(`Recucring testing By company ${companyDummy.company_name} and email is ${companyDummy.company_email}`,async({assert})=>{
    const today = DateTime.now()
    const company = await Company.findByOrFail('email',companyDummy.company_email)
    
    const subcriptionOngoing = await Subscription.query().
    where('status',Subscription.STATUS_ONGOING).
    whereNot('package_name',Subscription.PACKAGE_TRIAL).
    where('company_id',company.id).firstOrFail()

    subcriptionOngoing.end_date = today;
    subcriptionOngoing.status   = Subscription.STATUS_TERMINATED
    subcriptionOngoing.save();

    const nextDay: number = 1;
    const nextToStartDate:DateTime = DateTime.now().plus({day:nextDay});
    const packageActive = subcriptionOngoing.package_name
    const feePayByCustomer: number = calculatePlan(subcriptionOngoing.interval_count, packageActive, packageActive,nextDay)
    const maxUser: number = calculateMaxUsers(packageActive)

    

    const subscription = await company.related('subscriptions').create({
      reference_number: await Subscription.generateReferenceNumber(company.id),
      package_name: subcriptionOngoing.package_name,
      package_description: subcriptionOngoing.package_name + ' ' + subcriptionOngoing.interval_count + ' Bulan',
      max_users: maxUser,
      price: feePayByCustomer,
      status: Subscription.STATUS_PENDING_PAYMENT,
      start_date: nextToStartDate,
      end_date: (subcriptionOngoing.interval_count > 1)
        ? nextToStartDate.plus({ months: subcriptionOngoing.interval_count }).endOf('month')
        : nextToStartDate.endOf('month'),
      is_recurring: true,
      interval: 'MONTH',
      interval_count: subcriptionOngoing.interval_count,
      created_by: 'sistem',
      updated_by: 'sistem',
    })

    Logger.info(`Info expired date ongoing is : ${today.toFormat('yyyy-LL-dd')}`)
    Logger.info(`Info recurring start : ${nextToStartDate.toFormat('yyyy-LL-dd')}: end: ${subscription.end_date?.toFormat('yyyy-LL-dd')}`)



    const payment = new Payment
    payment.reference_number = await Payment.generateReferenceNumber()
    payment.subscription_id = subscription.id
    payment.amount = subscription.price
    payment.status = Payment.STATUS_PENDING
    payment.created_by = "SISTEM TEST"
    payment.updated_by = "SISTEM TEST"
    await payment.save()


    const chargeCreditCard = new ChargeCreditCard();
    chargeCreditCard.company = company;
    chargeCreditCard.payment = payment;
    chargeCreditCard.subcription = subscription;

    const payToXendit = await chargeCreditCard.withXendit(feePayByCustomer,true,false)
    await responseSave('pay TESTING :','xendit','xendit',payToXendit.response,payToXendit.is_fail)

    payment.status = payToXendit.response.status;
    payment.updated_by = 'xendit';
    payment.save();

    if(payToXendit.status == 'failed') {
      subscription.status = Subscription.STATUS_TERMINATED
      subscription.save();
      throw new Error(payToXendit.message)
    }

    if(payToXendit.response.status == 'AUTHORIZED'){
      const captureCharge = await chargeCreditCard.captureCard(payToXendit.response.id)
      await responseSave('Caputure Charge  TESTING:','xendit','xendit',captureCharge.response,captureCharge.is_fail)
      if(captureCharge.status == 'failed') throw new Error(captureCharge.message)
    }

    subscription.status = Subscription.STATUS_ONGOING
    subscription.save();

    const erpIntegration = new ErpIntegartion()
    erpIntegration.company = company;
    erpIntegration.subscription = subscription;
    const updateERPsubcription = await erpIntegration.updateSubscription()

    assert.isFalse(payToXendit.is_fail)
    assert.isTrue(updateERPsubcription)
  })

  }

)
