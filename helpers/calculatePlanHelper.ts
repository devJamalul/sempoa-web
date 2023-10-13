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
        activeDayOfMonth : parseInt(activeDayOfMonth.days.toString()) + 1,
        packageDayOfMonth : parseInt(packageDayOfMonth.days.toString()) + 1
    }
    return transformDate
}


export const calculatePlan = function(monthSubscription: number,typePlan: string,typePlanActive):number{
    const feePlan:number = pricePlan(typePlan);
    const feePlanActive:number = pricePlan(typePlanActive);
    const isUpgrade:boolean = feePlan != feePlanActive && feePlanActive != 0
    let totalPay:number =0;
    const daysSubscription = getDaysDateByMonth(monthSubscription)
    const feeCalculateByMonth:number = feePlan * monthSubscription;
    totalPay = (feeCalculateByMonth/daysSubscription.packageDayOfMonth*daysSubscription.activeDayOfMonth);
    if(isUpgrade) totalPay = totalPay - (feePlanActive/daysSubscription.packageDayOfMonth)*daysSubscription.activeDayOfMonth;
    totalPay =Math.ceil(totalPay/1000)*1000
    totalPay = totalPay > feeCalculateByMonth ? feeCalculateByMonth : totalPay;  
   return totalPay;
}

export const pricePlan = function(typePlan):number{
    let feePlan:number =0;
    if(Subscription.PACKAGE_BASIC == typePlan ) feePlan = configPlan.basic.price
    if(Subscription.PACKAGE_MEDIUM == typePlan ) feePlan = configPlan.medium.price
    if(Subscription.PACKAGE_MINIMALIST == typePlan ) feePlan = configPlan.minimalist.price
    return feePlan
}


export const calculateMaxUsers = function(typePlan):number{
    let maxUser:number =0;
    if(Subscription.PACKAGE_BASIC == typePlan ) maxUser = configPlan.basic.maxUser
    if(Subscription.PACKAGE_MEDIUM == typePlan ) maxUser = configPlan.medium.maxUser
    if(Subscription.PACKAGE_MINIMALIST == typePlan ) maxUser = configPlan.minimalist.maxUser
    return maxUser;
}
