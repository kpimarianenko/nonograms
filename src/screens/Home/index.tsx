import Text from '@components/Text';

import { PropsWithString, withTranslation } from '@i18n';

const HomeScreen = ({ string }: PropsWithString) => <Text>{string.home.title}</Text>;

export default withTranslation(HomeScreen);
