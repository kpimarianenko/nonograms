import { createContext, PropsWithChildren, useMemo } from 'react';

import { useStorage } from '@storage';

import { localeCodeStorageKey } from './constants';
import { getTranslation } from './helpers';
import locales from './locales';
import { LocaleCode, Translation } from './types';

interface I18ContextValue {
  string: Translation;
  localeCode: string;
  changeLocale: React.Dispatch<React.SetStateAction<LocaleCode>>;
}

const defaultLocaleCode = 'ua';

export const I18Context = createContext<I18ContextValue>({
  string: locales[defaultLocaleCode],
  localeCode: defaultLocaleCode,
  changeLocale: () => {}
});

export const I18Provider = ({ children }: PropsWithChildren) => {
  const [localeCode, changeLocale] = useStorage<LocaleCode>(
    localeCodeStorageKey,
    defaultLocaleCode
  );
  const string = useMemo(() => getTranslation(localeCode), [localeCode]);

  return (
    <I18Context.Provider value={{ string, localeCode, changeLocale }}>
      {children}
    </I18Context.Provider>
  );
};
