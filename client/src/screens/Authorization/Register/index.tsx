import { TextInputProps, View } from 'react-native';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FormikProps, withFormik } from 'formik';

import Button from '@components/Button';
import Input from '@components/Input';
import Link from '@components/Link';
import Text from '@components/Text';

import { RouteName, ScreenProps } from '@navigation/types';

import { useRegisterMutation } from '@gql';

import ToastService from '@services/toastService';

import baseStyles from '@theme/styles';

import { PropsWithString, withTranslation } from '@i18n';

import { FormValues, validationSchema } from './validation';
import authStyles from '../styles';

interface InputData {
  name: keyof FormValues;
  icon: IconDefinition;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
}

const inputs: Array<InputData> = [
  {
    name: 'username',
    icon: faUser
  },
  {
    name: 'email',
    icon: faEnvelope,
    keyboardType: 'email-address'
  },
  {
    name: 'password',
    icon: faLock,
    secureTextEntry: true
  },
  {
    name: 'repeatPassword',
    icon: faLock,
    secureTextEntry: true
  }
];

type RegisterScreenProps = FormikProps<FormValues> &
  PropsWithString<ScreenProps<RouteName.Register>>;

const RegisterScreen = ({
  isValid,
  errors,
  values,
  touched,
  handleChange,
  handleBlur,
  navigation,
  string
}: RegisterScreenProps) => {
  const [registerMutation, { loading }] = useRegisterMutation({
    fetchPolicy: 'no-cache',
    onCompleted: ({ register }) => {
      if (register) {
        navigation.navigate(RouteName.Login);
        ToastService.success({
          title: string.authorization.register.form.success.title,
          subtitle: string.authorization.register.form.success.subtitle
        });
      }
    }
  });

  const register = () => {
    registerMutation({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    });
  };

  const mappedInputs = inputs.map(({ name, icon, keyboardType, secureTextEntry }) => (
    <Input
      key={`RegisterForm-${name}`}
      icon={icon}
      value={values[name]}
      error={touched[name] ? errors[name] : null}
      onChangeText={handleChange(name)}
      onBlur={handleBlur(name)}
      keyboardType={keyboardType}
      placeholder={string.authorization.register.form[name].label}
      secureTextEntry={secureTextEntry}
      wrapperStyle={authStyles.input}
    />
  ));

  return (
    <View style={authStyles.root}>
      <View style={authStyles.container}>
        <View style={authStyles.form}>
          <Text style={authStyles.title}>{string.authorization.register.title}</Text>
          <Text style={authStyles.subtitle}>{string.authorization.register.subtitle}</Text>
          {mappedInputs}
          <Text style={baseStyles.textAlignCenter}>{string.authorization.register.form.note}</Text>
        </View>
      </View>
      <Button
        style={authStyles.button}
        title={string.authorization.register.form.submit}
        onPress={register}
        disabled={!isValid || loading}
      />
      <View style={baseStyles.rowSpaceBetween}>
        <Text>{string.authorization.register.haveAccountMessage}</Text>
        <Link
          title={string.authorization.register.signIn}
          onPress={() => navigation.navigate(RouteName.Login)}
        />
      </View>
    </View>
  );
};

export default withTranslation(
  withFormik<object, FormValues>({
    handleSubmit: () => {},
    validationSchema,
    validateOnMount: true,
    mapPropsToValues: () => ({
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
    })
  })(RegisterScreen)
);
