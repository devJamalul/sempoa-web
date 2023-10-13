/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import View from '@ioc:Adonis/Core/View'
import sempoa from 'Config/sempoa';


View.global('config',{
    url:sempoa.url,
})
  
