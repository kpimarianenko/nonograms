import * as yup from 'yup';

import { emailRegex, usernameRegex } from '@constants/regex';

export const registerSchema = yup.object().shape({
  username: yup.string().required().matches(usernameRegex).min(4).max(50),
  email: yup.string().required().matches(emailRegex),
  password: yup.string().required().min(4).max(50)
});
