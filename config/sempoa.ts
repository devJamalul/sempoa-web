import Env from '@ioc:Adonis/Core/Env'
import { base64 } from '@ioc:Adonis/Core/Helpers'

export default
  {
    url: Env.get('SEMPOA_URL'),

    api: Env.get('SEMPOA_URL') + '/api',

    // xendit Pak Ivan
    // xendit: {
    //   secret_key: base64.encode('xnd_development_GKghcunUQ7bNkqohi7COW3FCoph29EXCOeiBY2XnFHe3qond2H999U9b5WMwn' + ':'),
    //   public_key: 'xnd_public_development_gM6Y4Z3Chfq4zo86sq9bedaX61VVRAVf7rcxL2oUlCvHkwkswN74kQJoO6FX31',
    // },

    // xendit Pak Diar
    xendit: {
      secret_key: base64.encode('xnd_development_0HISbhk70woMhW908zWzhNJcwVEFQlN2hpdjJYR4DoPnA8bMkmFCuk5PydQHil' + ':'),
      public_key: 'xnd_public_development_jWyIbzJh36ODxvcfpV2xvPY0sQgWPm8Qo393GHCccPxigNnxHdqw5MywwyTvjx',
    },
  }
