import { Text } from 'react-native';

import { PropsWithString, withTranslation } from '@i18n';

const LoginScreen = ({ string }: PropsWithString) => (
  <Text>{string.authorization.login.title}</Text>
);

export default withTranslation(LoginScreen);
