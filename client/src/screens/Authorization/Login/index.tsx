import { TouchableOpacity, View } from 'react-native';

import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { FormikProps, withFormik } from 'formik';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import Link from '@components/Link';
import Text from '@components/Text';

import { RouteName, ScreenProps } from '@navigation/types';

import { useGetUserByUsernameLazyQuery } from '@gql';

import ToastService from '@services/toastService';

import useAuth from '@hooks/useAuth';

import baseStyles from '@theme/styles';

import { FirebaseAuthErrors } from '@constants/types';

import { PropsWithString, withTranslation } from '@i18n';

import { FormValues, validationSchema } from './validation';
import authStyles from '../styles';

import styles from './styles';

type LoginScreenProps = FormikProps<FormValues> & PropsWithString<ScreenProps<RouteName.Login>>;

const LoginScreen = ({
  isValid,
  handleChange,
  setFieldValue,
  values,
  navigation,
  string
}: LoginScreenProps) => {
  const { setAuthData } = useAuth();

  const [getUserByUsername] = useGetUserByUsernameLazyQuery();

  const login = async () => {
    const { data } = await getUserByUsername({
      variables: {
        username: values.username
      }
    });

    if (data?.getUser) {
      try {
        await auth().signInWithEmailAndPassword(data.getUser.email, values.password);
        const token = await auth().currentUser?.getIdToken();

        if (token) {
          setAuthData({
            token,
            rememberMe: !!values.rememberMe
          });
        }
      } catch (err) {
        const error = err as FirebaseAuthTypes.NativeFirebaseAuthError;

        if (error.code === FirebaseAuthErrors.WrongPassword) {
          return ToastService.error({
            title: string.authorization.errors.title,
            message: string.authorization.errors.wrongPassword
          });
        }

        // eslint-disable-next-line no-console
        console.error(err);
        ToastService.error({
          title: string.common.error.title,
          message: string.common.error.message
        });
      }
    }
  };

  return (
    <View style={authStyles.root}>
      <View style={authStyles.container}>
        <View style={authStyles.form}>
          <Text style={authStyles.title}>{string.authorization.login.title}</Text>
          <Text style={authStyles.subtitle}>{string.authorization.login.subtitle}</Text>
          <Input
            icon={faUser}
            value={values.username}
            onChangeText={handleChange('username')}
            placeholder={string.authorization.login.form.username}
            wrapperStyle={authStyles.input}
          />
          <Input
            icon={faLock}
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder={string.authorization.login.form.password}
            secureTextEntry
            wrapperStyle={authStyles.input}
          />
          <View style={styles.formFooter}>
            <Checkbox
              title={string.authorization.login.form.rememberMe}
              checked={!!values.rememberMe}
              onChange={value => setFieldValue('rememberMe', value)}
            />
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>
                {string.authorization.login.form.forgotPassword}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button
        style={authStyles.button}
        title={string.authorization.login.form.submit}
        onPress={login}
        disabled={!isValid}
      />
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

export default withFormik<object, FormValues>({
  handleSubmit: () => {},
  validationSchema,
  validateOnMount: true,
  mapPropsToValues: () => ({
    username: '',
    password: '',
    rememberMe: false
  })
})(withTranslation(LoginScreen));
