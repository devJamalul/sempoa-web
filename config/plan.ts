const config ={
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
    config.minimalist.isShow = true;
    config.basic.isShow = true;
    config.medium.isShow = true;
    
    config.minimalist.isActive = false;
    config.enterprise.isActive = false;
    config.medium.isActive = false;
    config.basic.isActive = false;

    if(Subscription.PACKAGE_MEDIUM == packageActive){
        config.enterprise.isActive = false;
        config.minimalist.isActive = false;
        config.basic.isActive = false;
        config.medium.isActive = true;
        
        config.minimalist.isShow = false;
        config.basic.isShow = false;
    }

    if(Subscription.PACKAGE_BASIC == packageActive){
        config.enterprise.isActive = false;
        config.medium.isActive = false;
        config.minimalist.isActive = false;
        config.basic.isActive = true;


        config.basic.isShow = true;
        config.minimalist.isShow = false;
        config.medium.isShow = true;
    }

    if(Subscription.PACKAGE_ENTERPRISE == packageActive){
        config.enterprise.isActive = true;
        config.medium.isActive = false;
        config.basic.isActive = false;
        config.minimalist.isActive = false;
        
        config.minimalist.isShow = false;
        config.basic.isShow = false;
        config.medium.isShow = false;
    }

    if(Subscription.PACKAGE_MINIMALIST == packageActive){
        config.minimalist.isActive = true;
        config.enterprise.isActive = false;
        config.medium.isActive = false;
        config.basic.isActive = false;
        config.minimalist.isShow = true;
        config.basic.isShow = true;
        config.medium.isShow = true;
    }
    return config;
}