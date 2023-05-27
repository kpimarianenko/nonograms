import { I18Provider } from './context';
import { useLocale, useTranslation } from './hooks';
import { LocaleCode, PropsWithString } from './types';

export const withTranslation =
  (Component: React.ComponentType<PropsWithString>) =>
  ({ ...props }) => {
    const string = useTranslation();

    return <Component {...props} string={string} />;
  };

export { I18Provider, useLocale, useTranslation };
export type { LocaleCode, PropsWithString };
