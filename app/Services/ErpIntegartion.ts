import Company from "App/Models/Company";
import Subscription from "App/Models/Subscription";
import sempoa from "Config/sempoa";
import axios from "axios";
import { DateTime } from "luxon";
import { requestSave,responseSave} from 'Helpers/payloadHelper'
import Logger from '@ioc:Adonis/Core/Logger'

interface ErpInterface{
    updateSubscription()
}

export default class ErpIntegartion implements ErpInterface{
    public company: Company
    public subscription: Subscription

    async updateSubscription(){
        const urlSempoa = sempoa.api + '/integration/subscription';
        const headers = {
          headers: {
            'Authorization': 'Bearer ' + this.company.token,
            'Accept': "application/json"
          }
        }
        const today = DateTime.now()

        const erpPayload = {
            subscription_name: this.subscription.package_name,
            subscription_end: (this.subscription.interval_count > 1)
              ? today.plus({ months: this.subscription.interval_count }).endOf('month').toFormat('yyyy-LL-dd')
              : today.endOf('month').toFormat('yyyy-LL-dd'),
            subscription_max_user: this.subscription.max_users,
            subscription_status: Subscription.STATUS_ONGOING,
          }

          const url = `Update Subscription to Sempoa ERP: ${this.company.company_name} for  ${this.subscription.package_name}  ${this.subscription.interval_count}  Bulan`
          await requestSave(url,this.company.pic_name,this.company.pic_name,erpPayload)

          await axios.post(urlSempoa, erpPayload, headers)
          .then(async function (response) {
            await responseSave(url,'Sempoa ERP','Sempoa ERP',response.data)
            Logger.info('Success update subscription to Sempoa ERP')
          })
          .catch(function (error) {
            throw new Error('Error update subscription to Sempoa ERP: ' + error.message)
          })
  
    }
}