import Env from '@ioc:Adonis/Core/Env'

export default
 {
  url: Env.get('SEMPOA_URL'),

  api: Env.get('SEMPOA_URL') + '/api'
 }
