import locales from './locales';
import { LocaleCode, Translation } from './types';

export const getTranslation = (code: LocaleCode): Translation => locales[code];
