import { DateTime ,} from 'luxon'
import { configPlan} from 'Config/plan'
import Subscription from 'App/Models/Subscription'


const getDaysDateByMonth = function(month){
    month = month-1;
    const now =  DateTime.now();
    const startDateMonth = DateTime.now().set({
        hour:23,
        minute:59,
        millisecond:0
    }).startOf('month');
    const activeDayOfMonth = now.plus({
        months: month,
    }).endOf('month').diff(now,'days',{
        conversionAccuracy:'casual'
    })

    const packageDayOfMonth = now.plus({
        months: month
    }).endOf('month').diff(startDateMonth,'days',{
        conversionAccuracy:'casual'
    })

    const transformDate = {
        activeDayOfMonth : parseInt(activeDayOfMonth.days.toString()),
        packageDayOfMonth : parseInt(packageDayOfMonth.days.toString())
    }
    return transformDate
}


export const calculatePlan = function(monthSubscription,typePlan):number{
    let feePlan:number =0;
    const daysSubscription = getDaysDateByMonth(monthSubscription)
    if(Subscription.PACKAGE_BASIC == typePlan ) feePlan = configPlan.basic.price
    if(Subscription.PACKAGE_MEDIUM == typePlan ) feePlan = configPlan.medium.price
    if(Subscription.PACKAGE_MINIMALIST == typePlan ) feePlan = configPlan.minimalist.price
    const feeCalculateByMonth:number = feePlan * monthSubscription;
    const totalPay:number = Math.ceil(daysSubscription.activeDayOfMonth/daysSubscription.packageDayOfMonth*feeCalculateByMonth/1000)*1000;
   return totalPay;
}


export const calculateMaxUsers = function(typePlan):number{
    let maxUser:number =0;
    if(Subscription.PACKAGE_BASIC == typePlan ) maxUser = configPlan.basic.maxUser
    if(Subscription.PACKAGE_MEDIUM == typePlan ) maxUser = configPlan.medium.maxUser
    if(Subscription.PACKAGE_MINIMALIST == typePlan ) maxUser = configPlan.minimalist.maxUser
    return maxUser;
}
