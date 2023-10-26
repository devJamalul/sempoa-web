import axios from 'axios';
import Company from 'App/Models/Company';
import Payment from 'App/Models/Payment';
import sempoa from 'Config/sempoa';
import { requestSave,responseSave} from 'Helpers/payloadHelper'
import Subscription from 'App/Models/Subscription';
interface charge{
    withXendit(toPay:number)

    updatePaymetXendit(reference_number:string,reason:string)
}

export default class ChargeCreditCard implements charge{
    public company :Company;
    public payment  :Payment;
    public subcription :Subscription;
    urlXenditCharge :string = 'https://api.xendit.co/credit_card_charges'
     async withXendit(toPay:number){
        
     const chargePayload = {
            token_id: this.company.token_id,
            external_id: this.payment.reference_number,
            authentication_id: this.company.token_auth_id,
            amount: toPay,
            currency: 'IDR',
            capture: true
        }
    
      const headerXendit = {
            headers: {
              'Authorization': 'Basic ' + sempoa.xendit.secret_key,
            }
        }

      const company = this.company  
      const url = `Create charge: ${company.company_name} for ${this.subcription.package_name}  ${this.subcription.interval_count}  Bulan`; 
      await requestSave(url,company.pic_name,company.pic_email,chargePayload)
      const updatePaymetXendit = this.updatePaymetXendit
      const payment = this.payment;
      
      const chargeWithXendit= await axios.post(this.urlXenditCharge, chargePayload, headerXendit)
        .then(async function (response) { 
            
            const isFailed = response.data.status == 'FAILED'
            const reason   = isFailed ? response.data.failure_reason : response.data.status 
            const status = isFailed ? 'failed':'success' 
            await responseSave(url,company.pic_name,company.pic_email,response.data,isFailed)
            await updatePaymetXendit(response.data.external_id,reason)
    
            return {
                status : status,
                message : reason
            }
        })
        .catch(async function (responseError) { 
            await responseSave(url,company.pic_name,company.pic_email,responseError,true)
            await updatePaymetXendit(payment.reference_number,responseError.message)
            return {
                status : 'failed',
                message : responseError.message
            }
        })

        return chargeWithXendit;
    }

    async updatePaymetXendit(reference_number:string,reason:string){
        await Payment
        .query()
        .where('reference_number', reference_number)
        .update({
          status: reason,
          updated_by: 'Xendit'
        })
    }
}