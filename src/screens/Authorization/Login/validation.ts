import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  rememberMe: yup.boolean()
});

export type FormValues = yup.InferType<typeof validationSchema>;
