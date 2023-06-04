import Text from '@components/Text';

import { PropsWithString, withTranslation } from '@i18n';

const RegisterScreen = ({ string }: PropsWithString) => (
  <Text>{string.authorization.register.title}</Text>
);

export default withTranslation(RegisterScreen);
