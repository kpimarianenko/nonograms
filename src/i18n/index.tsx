import { I18Provider } from './context';
import { useLocale, useTranslation } from './hooks';
import { LocaleCode, PropsWithString } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentWithTranslation = React.ComponentType<any>;

export const withTranslation =
  (Component: ComponentWithTranslation) =>
  ({ ...props }) => {
    const string = useTranslation();

    return <Component {...props} string={string} />;
  };

export { I18Provider, useLocale, useTranslation };
export type { LocaleCode, PropsWithString };
