import config from '@constants/config';

import locales from './locales';
import { LocaleCode, Translation } from './types';

export const getTranslation = (code: LocaleCode = config.defaultLocaleCode): Translation =>
  locales[code] || locales[config.defaultLocaleCode];
