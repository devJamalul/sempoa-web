export const configPlan ={
    minimalist:{
        price:400000,
        slashPrice:200000,
        maxUser:2,
        isShow:true,
        isActive:false,
        prefixPrice :{
            price :"400",
            unit :"Ribu", 
        }  
    },
    basic:{
        price:1000000,
        slashPrice:200000,
        maxUser:5,
        isShow:true,
        isActive:false,
        prefixPrice :{
            price :"1",
            unit :"Juta", 
        }
    },
    medium:{
        price:2000000,
        slashPrice:200000,
        maxUser:10,
        isShow:true,
        isActive:false,
        prefixPrice :{
            price :"2",
            unit :"Juta", 
        }
    },
    enterprise:{
        isActive:false,
    }
}

export const setConfigByPackageActive = function(packageActive,Subscription){
    configPlan.minimalist.isShow = true;
    configPlan.basic.isShow = true;
    configPlan.medium.isShow = true;
    
    configPlan.minimalist.isActive = false;
    configPlan.enterprise.isActive = false;
    configPlan.medium.isActive = false;
    configPlan.basic.isActive = false;

    if(Subscription.PACKAGE_MEDIUM == packageActive){
        configPlan.enterprise.isActive = false;
        configPlan.minimalist.isActive = false;
        configPlan.basic.isActive = false;
        configPlan.medium.isActive = true;
        
        configPlan.minimalist.isShow = false;
        configPlan.basic.isShow = false;
    }

    if(Subscription.PACKAGE_BASIC == packageActive){
        configPlan.enterprise.isActive = false;
        configPlan.medium.isActive = false;
        configPlan.minimalist.isActive = false;
        configPlan.basic.isActive = true;


        configPlan.basic.isShow = true;
        configPlan.minimalist.isShow = false;
        configPlan.medium.isShow = true;
    }

    if(Subscription.PACKAGE_ENTERPRISE == packageActive){
        configPlan.enterprise.isActive = true;
        configPlan.medium.isActive = false;
        configPlan.basic.isActive = false;
        configPlan.minimalist.isActive = false;
        
        configPlan.minimalist.isShow = false;
        configPlan.basic.isShow = false;
        configPlan.medium.isShow = false;
    }

    if(Subscription.PACKAGE_MINIMALIST == packageActive){
        configPlan.minimalist.isActive = true;
        configPlan.enterprise.isActive = false;
        configPlan.medium.isActive = false;
        configPlan.basic.isActive = false;
        configPlan.minimalist.isShow = true;
        configPlan.basic.isShow = true;
        configPlan.medium.isShow = true;
    }
    return configPlan;
}