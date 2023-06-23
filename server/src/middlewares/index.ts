import * as yup from 'yup';

import { BadRequestHTTPError, Middleware } from '@types';

export const Validate =
  (key: string, schema: yup.AnySchema): Middleware =>
  async ({ context: { string }, info }, next) => {
    const input = info.variableValues[key];

    try {
      await schema.validate(input);
    } catch (err) {
      throw new BadRequestHTTPError(string.errors.common.validationError);
    }

    return next();
  };
