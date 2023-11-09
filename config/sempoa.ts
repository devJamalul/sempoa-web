import Env from '@ioc:Adonis/Core/Env'
import { base64 } from '@ioc:Adonis/Core/Helpers'

export default
  {
    url: Env.get('SEMPOA_URL'),

    api: Env.get('SEMPOA_URL') + '/api',

    register: Env.get('REGISTRATION_ENABLED', true),

    // xendit Sempoa
    xendit: {
      secret_key: base64.encode(Env.get('SECRET_KEY_XENDIT') + ':'),
      public_key: Env.get('PUBLIC_KEY_XENDIT'),
      webhook_verification_token: Env.get('WEBHOOK_VERIFICATION_TOKEN_XENDIT'),
    },
  }
