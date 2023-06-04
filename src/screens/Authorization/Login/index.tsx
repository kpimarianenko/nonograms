import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import Link from '@components/Link';
import Text from '@components/Text';

import baseStyles from '@theme/styles';

import { PropsWithString, withTranslation } from '@i18n';

import styles from './styles';

const LoginScreen = ({ string }: PropsWithString) => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>{string.authorization.login.title}</Text>
          <Text style={styles.subtitle}>{string.authorization.login.subtitle}</Text>
          <Input
            icon={faUser}
            placeholder={string.authorization.login.form.username}
            containerStyle={styles.input}
          />
          <Input
            icon={faLock}
            placeholder={string.authorization.login.form.password}
            containerStyle={styles.input}
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
      <Button style={styles.button} title={string.authorization.login.form.submit} />
      <View style={baseStyles.rowSpaceBetween}>
        <Text>{string.authorization.login.noAccountMessage}</Text>
        <Link title={string.authorization.login.signUp} />
      </View>
    </View>
  );
};

export default withTranslation(LoginScreen);
