import { test } from '@japa/runner'
import Company from 'App/Models/Company'




test.group('Subscription',()=>{
  test('display welcome page to register', async ({ visit }) => {
    const page = await visit('http://127.0.0.1:3333')
    await page.getByRole('navigation').getByRole('link', { name: 'Coba Gratis 14 Hari' }).click()
    await page.assertPath('/register')
  })
  
  // test('Register Company', async ({ visit }) => {
  //   const page = await visit('http://127.0.0.1:3333/register')
  //   await page.fill('#company_name','Jaya Sakti')
  //   await page.fill('#brand_name','Jasa Konseling')
  //   await page.fill('#company_email','jayasakti@gmail.com')
  //   await page.fill('#company_phone','089502773121')
  //   await page.fill('#company_npwp','123213123223')
  //   await page.fill('#company_website','www.jayasakti.org')
  //   await page.fill('#company_country','Indonesia')
  //   await page.fill('#company_city','Jakarta')
  //   await page.fill('#fax','11212131131')
  //   await page.fill('#company_address','Jln Daruss')
  //   await page.fill('#pic_name','Jamalul Insan')
  //   await page.fill('#phone_number','089502774061')
  //   await page.fill('#pic_email','jamal123@gmail.com')
  //   await page.fill('#password','password')
  //   await page.selectOption('#company_account_type','Korporasi')
  //   await page.getByRole('button',{'name':'Coba Gratis'}).click();
  //   await page.assertPath('/register/success')
  // })

  test('plans company',async({visit})=>{
    const company = await Company.findByOrFail('email','jayasakti@gmail.com')
    const page = await visit(`http://127.0.0.1:3333/plans/${company.token}`)
    await page.assertUrl(`http://127.0.0.1:3333/plans/${company.token}`);
  })

  test('checkout page minimalist',async({visit})=>{
    const company = await Company.findByOrFail('email','jayasakti@gmail.com')
    const page = await visit(`http://127.0.0.1:3333/checkout/Minimalist/${company.token}`)
    await page.fill("#credit_card_number",'4000000000001091')
    await page.fill("#expiration",'12/30');
    await page.fill("#secure_code",'123');
    await page.click("#pay")
    await page.waitForTimeout(7000 )

  
    const frame =  await page.frame({name:"sample-inline-frame"})
    await page.screenshot({path:'0.png'})
    // const frameValidator= await frame.frameLocator('Cardinal-CCA-IFrame');
    //  await frameValidator.getByRole('button',{name:'submit'})
    //  await testx.fill('1234');
    await page.assertUrl(`http://127.0.0.1:3333/checkout/Minimalist/${company.token}`);

  })
  



})


// Plans

// find company by name and email
// get token company
// visit plans
// klik 
// assert plans checkout


// checkout



// Recurring
