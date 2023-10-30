import axios from 'axios';
import Company from 'App/Models/Company';
import Payment from 'App/Models/Payment';
import sempoa from 'Config/sempoa';
import { requestSave } from 'Helpers/payloadHelper'
import Subscription from 'App/Models/Subscription';
import { decrypt } from 'Helpers/EncryptDataHelper';

interface charge{
    withXendit(toPay:number)

    authenticationCardToPay(amount:number)

    reverseAuthorization(charge_id:string,reference_number:string)

    captureCard(charge_id:string,amount:number)
}

export default class ChargeCreditCard implements charge{
    public company :Company;
    public payment  :Payment;
    public subcription :Subscription;
    urlXenditCharge :string = 'https://api.xendit.co/credit_card_charges'

    headerXendit = {
        headers: {
          'Authorization': 'Basic ' + sempoa.xendit.secret_key,
        }
    }


    async withXendit(toPay:number,capture:boolean = true,is_used_authentication_id:boolean =true){
        
     const chargePayload:object = {
            token_id: decrypt(this.company.token_id),
            external_id: this.payment.reference_number,
            amount: toPay,
            currency: 'IDR',
            capture: capture,
        }
    
     if(is_used_authentication_id && this.company.token_auth_id != ''){
         chargePayload['authentication_id'] = decrypt(this.company.token_auth_id);
      }else{
        chargePayload['is_recurring'] = true;
      }
    
      const company = this.company  
      const url = `Create charge: ${company.company_name} for ${this.subcription.package_name}  ${this.subcription.interval_count}  Bulan`; 
      await requestSave(url,company.pic_name,company.pic_email,chargePayload)
     
      const chargeWithXendit= await axios.post(this.urlXenditCharge, chargePayload, this.headerXendit)
        .then(async function (response) { 
            
            const isFailed = response.data.status == 'FAILED'
            const reason   = isFailed ? response.data.failure_reason : response.data.status 
            const status = isFailed ? 'failed':'success' 
            return {
                status : status,
                is_fail : isFailed,
                message : reason,
                response: response.data
            }
        })
        .catch(async function (responseError) { 
            return {
                status : 'failed',
                is_fail : true,
                message : responseError.message,
                response: responseError
            }
        })

        return chargeWithXendit;
    }

    async authenticationCardToPay(amount:number){
        return await this.withXendit(amount,false)
    }
    
    async reverseAuthorization(charge_id:string,reference_number:string){

      const urlReserveAuthorization = `https://api.xendit.co/credit_card_charges/${charge_id}/auth_reversal`
      const payloadReserver = {external_id:reference_number};
      const company = this.company  
      const url = `Reserve Authorization charge: ${company.company_name} for ${this.subcription.package_name}  ${this.subcription.interval_count}  Bulan`; 
      await requestSave(url,company.pic_name,company.pic_email,payloadReserver)
     
      const reserveAuthorization= await axios.post(urlReserveAuthorization, payloadReserver, this.headerXendit)
        .then(async function (response) { 
            
            const isFailed = response.data.status == 'FAILED'
            const reason   = isFailed ? response.data.failure_reason : response.data.status 
            const status = isFailed ? 'failed':'success' 
            return {
                status : status,
                message : reason,
                is_fail : isFailed,
                response: response.data
            }
        })
        .catch(async function (responseError) { 
            return {
                status : 'failed',
                is_fail : true,
                message : responseError.message,
                response: responseError
            }
        })

        return reserveAuthorization;
    }
    

    async captureCard(charge_id:string,amount:number = 15000){
        const urlCaptureCard = `https://api.xendit.co/credit_card_charges/${charge_id}/capture`
        const payloadCapture = {amount:amount};
        const company = this.company  
        const url = `Caputre Card: ${company.company_name} for ${this.subcription.package_name}  ${this.subcription.interval_count}  Bulan`; 
        await requestSave(url,company.pic_name,company.pic_email,payloadCapture)
       
        const caputureCard= await axios.post(urlCaptureCard, payloadCapture, this.headerXendit)
          .then(async function (response) { 
              
              const isFailed = response.data.status == 'FAILED'
              const reason   = isFailed ? response.data.failure_reason : response.data.status 
              const status = isFailed ? 'failed':'success' 
              return {
                  status : status,
                  message : reason,
                  is_fail : isFailed,
                  response: response.data
              }
          })
          .catch(async function (responseError) { 
              return {
                  status : 'failed',
                  is_fail : true,
                  message : responseError.message,
                  response: responseError
              }
          })
  
          return caputureCard;
    }


}