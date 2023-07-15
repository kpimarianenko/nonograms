import Text from '@components/Text';

import { PropsWithString, withTranslation } from '@i18n';

const SettingsScreen = ({ string }: PropsWithString) => <Text>{string.settings.title}</Text>;

export default withTranslation(SettingsScreen);
