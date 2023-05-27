import { useContext } from 'react';

import { I18Context } from './context';

export const useLocale = () => {
  const { localeCode, changeLocale } = useContext(I18Context);

  return { localeCode, changeLocale };
};

export const useTranslation = () => useContext(I18Context).string;
