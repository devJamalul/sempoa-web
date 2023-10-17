

export const pricePlan = function (typePlan): number {
  let feePlan: number = 0;
  if (Subscription.PACKAGE_BASIC == typePlan) feePlan = configPlan.basic.price
  if (Subscription.PACKAGE_MEDIUM == typePlan) feePlan = configPlan.medium.price
  if (Subscription.PACKAGE_MINIMALIST == typePlan) feePlan = configPlan.minimalist.price
  return feePlan
}

export const setRequest = function (data): void {
  
}
