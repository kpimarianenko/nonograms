import { DataSource } from 'typeorm';

import config from '@constants/config';

export const connectDB = () => {
  const AppDataSource = new DataSource(config.database);

  // eslint-disable-next-line no-console
  AppDataSource.initialize().then(() => console.log('Connected to PostgreSQL server'));
};
