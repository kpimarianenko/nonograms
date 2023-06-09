import { View } from 'react-native';

import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '@components/Button';
import Input from '@components/Input';
import Link from '@components/Link';
import Text from '@components/Text';

import { RouteName, ScreenProps } from '@navigation/types';

import baseStyles from '@theme/styles';

import { PropsWithString, withTranslation } from '@i18n';

import authStyles from '../styles';

type RegisterScreenProps = PropsWithString<ScreenProps<RouteName.Register>>;

const RegisterScreen = ({ navigation, string }: RegisterScreenProps) => (
  <View style={authStyles.root}>
    <View style={authStyles.container}>
      <View style={authStyles.form}>
        <Text style={authStyles.title}>{string.authorization.register.title}</Text>
        <Text style={authStyles.subtitle}>{string.authorization.register.subtitle}</Text>
        <Input
          icon={faUser}
          placeholder={string.authorization.register.form.username}
          containerStyle={authStyles.input}
        />
        <Input
          icon={faEnvelope}
          placeholder={string.authorization.register.form.email}
          containerStyle={authStyles.input}
        />
        <Input
          icon={faLock}
          placeholder={string.authorization.register.form.password}
          containerStyle={authStyles.input}
        />
        <Input
          icon={faLock}
          placeholder={string.authorization.register.form.repeatPassword}
          containerStyle={authStyles.input}
        />
        <Text style={baseStyles.textAlignCenter}>{string.authorization.register.form.note}</Text>
      </View>
    </View>
    <Button style={authStyles.button} title={string.authorization.register.form.submit} />
    <View style={baseStyles.rowSpaceBetween}>
      <Text>{string.authorization.register.haveAccountMessage}</Text>
      <Link
        title={string.authorization.register.signIn}
        onPress={() => navigation.navigate(RouteName.Login)}
      />
    </View>
  </View>
);

export default withTranslation(RegisterScreen);
