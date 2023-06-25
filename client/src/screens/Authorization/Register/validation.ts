import * as yup from 'yup';

import { emailRegex, usernameRegex } from '@constants/regex';

import { PropsWithString } from '@i18n';

export const validationSchema = ({ string }: PropsWithString) => {
  const { form } = string.authorization.register;

  return yup.object().shape({
    username: yup
      .string()
      .required(form.username.errors.required)
      .matches(usernameRegex, form.username.errors.matches)
      .min(4, form.username.errors.min)
      .max(50, form.username.errors.max),
    email: yup
      .string()
      .required(form.email.errors.required)
      .matches(emailRegex, form.email.errors.matches),
    password: yup
      .string()
      .required(form.password.errors.required)
      .min(6, form.password.errors.min)
      .max(50, form.password.errors.max),
    repeatPassword: yup
      .string()
      .required(form.repeatPassword.errors.required)
      .oneOf([yup.ref('password')], form.repeatPassword.errors.oneOf)
  });
};
export type FormValues = yup.InferType<ReturnType<typeof validationSchema>>;
