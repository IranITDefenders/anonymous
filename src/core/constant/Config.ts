import {readEnv} from '@shared/utilities/readEnv';

export const APP_CONFIG = {
  token: readEnv('BOT_TOKEN'),
};
