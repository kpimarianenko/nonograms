import Text from '@components/Text';

import { RouteName, ScreenProps } from '@navigation/types';

import { PropsWithString, withTranslation } from '@i18n';

type RegisterScreenProps = PropsWithString<ScreenProps<RouteName.Register>>;

const HomeScreen = ({ string }: RegisterScreenProps) => <Text>{string.home.title}</Text>;

export default withTranslation(HomeScreen);
