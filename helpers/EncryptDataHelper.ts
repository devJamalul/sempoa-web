const sm4 = require('sm-crypto').sm4
import { appKey } from 'Config/app'


export const encrypt =  (string:string):string => {
    return sm4.encrypt(string, appKey);
}

export const decrypt = (encryptData:string):string =>{
    return sm4.decrypt(encryptData, appKey);
}