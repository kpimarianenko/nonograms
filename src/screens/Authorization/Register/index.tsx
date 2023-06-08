import Text from '@components/Text';

import { RouteName, ScreenProps } from '@navigation/types';

import { PropsWithString, withTranslation } from '@i18n';

type RegisterScreenProps = PropsWithString<ScreenProps<RouteName.Register>>;

const RegisterScreen = ({ string }: RegisterScreenProps) => (
  <Text>{string.authorization.register.title}</Text>
);

export default withTranslation(RegisterScreen);
