import { createContext, PropsWithChildren, useMemo, useState } from 'react';

import { getTranslation } from './helpers';
import locales from './locales';
import { LocaleCode, Translation } from './types';

interface I18ContextValue {
  string: Translation;
  localeCode: string;
  changeLocale: React.Dispatch<React.SetStateAction<LocaleCode>>;
}

const defaultLocaleCode = 'en';

export const I18Context = createContext<I18ContextValue>({
  string: locales[defaultLocaleCode],
  localeCode: defaultLocaleCode,
  changeLocale: () => {}
});

export const I18Provider = ({ children }: PropsWithChildren) => {
  const [localeCode, changeLocale] = useState<LocaleCode>('en');
  const string = useMemo(() => getTranslation(localeCode), [localeCode]);

  return (
    <I18Context.Provider value={{ string, localeCode, changeLocale }}>
      {children}
    </I18Context.Provider>
  );
};
