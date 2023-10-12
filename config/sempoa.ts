import Env from '@ioc:Adonis/Core/Env'
import { base64 } from '@ioc:Adonis/Core/Helpers'

export default
    {
        url: Env.get('SEMPOA_URL'),

        api: Env.get('SEMPOA_URL') + '/api',

        xendit: {
            secret_key: base64.encode('xnd_development_GKghcunUQ7bNkqohi7COW3FCoph29EXCOeiBY2XnFHe3qond2H999U9b5WMwn' + ':'),
            public_key: 'xnd_public_development_gM6Y4Z3Chfq4zo86sq9bedaX61VVRAVf7rcxL2oUlCvHkwkswN74kQJoO6FX31',
            // webhook_verification_token: 'bDC5FNDjFnlPLtwqdgZrR1WAL4WuMaPlcG5G48MZJdeYQwzH',
        }
    }
