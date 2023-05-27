import en from '@assets/locales/en.json';

import locales from './locales';

export type Translation = typeof en;
export type LocaleCode = keyof typeof locales;
export type PropsWithString<T = unknown> = T & { string: Translation };
