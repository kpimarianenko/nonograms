import dotenv from 'dotenv';
import { AppOptions } from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';
import { PasswordPolicyConfig } from 'firebase-admin/auth';
import { DataSourceOptions } from 'typeorm';

import { LocaleCode } from '@i18n/types';

dotenv.config();

interface Config {
  port: number;
  defaultLocaleCode: LocaleCode;
  apolloGuiUrl?: string;
  hash: { algorithm: string; salt: string };
  database: DataSourceOptions;
  firebase: AppOptions;
  fbPasswordPolicy: PasswordPolicyConfig;
}

const config: Config = {
  port: process.env.PORT ? +process.env.PORT : 4000,
  apolloGuiUrl: process.env.APOLLO_GUI_URL,
  defaultLocaleCode: 'en',
  hash: {
    algorithm: 'sha512',
    salt: process.env.HASH_SALT || ''
  },
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? +process.env.DB_PORT : 3306,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: [`${__dirname}/../models/**/schema.ts`],
    synchronize: true,
    logging: false
  },
  firebase: {
    credential: applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID
  },
  fbPasswordPolicy: {
    enforcementState: 'OFF',
    constraints: {
      requireNumeric: false,
      requireNonAlphanumeric: false,
      requireLowercase: false,
      requireUppercase: false,
      minLength: 6,
      maxLength: 50
    }
  }
};

export default config;
