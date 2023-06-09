import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import Link from '@components/Link';
import Text from '@components/Text';

import { RouteName, ScreenProps } from '@navigation/types';

import baseStyles from '@theme/styles';

import { PropsWithString, withTranslation } from '@i18n';

import authStyles from '../styles';

import styles from './styles';

type LoginScreenProps = PropsWithString<ScreenProps<RouteName.Login>>;

const LoginScreen = ({ navigation, string }: LoginScreenProps) => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={authStyles.root}>
      <View style={authStyles.container}>
        <View style={authStyles.form}>
          <Text style={authStyles.title}>{string.authorization.login.title}</Text>
          <Text style={authStyles.subtitle}>{string.authorization.login.subtitle}</Text>
          <Input
            icon={faUser}
            placeholder={string.authorization.login.form.username}
            containerStyle={authStyles.input}
          />
          <Input
            icon={faLock}
            placeholder={string.authorization.login.form.password}
            containerStyle={authStyles.input}
          />
          <View style={styles.formFooter}>
            <Checkbox
              title={string.authorization.login.form.rememberMe}
              checked={rememberMe}
              onChange={setRememberMe}
            />
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>
                {string.authorization.login.form.forgotPassword}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button style={authStyles.button} title={string.authorization.login.form.submit} />
      <View style={baseStyles.rowSpaceBetween}>
        <Text>{string.authorization.login.noAccountMessage}</Text>
        <Link
          title={string.authorization.login.signUp}
          onPress={() => navigation.navigate(RouteName.Register)}
        />
      </View>
    </View>
  );
};

export default withTranslation(LoginScreen);
