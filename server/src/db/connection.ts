import { DataSource } from 'typeorm';

export const connectDB = () => {
  const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: [`${__dirname}/../schema/*.schema.ts`],
    synchronize: true,
    logging: false
  });

  // eslint-disable-next-line no-console
  AppDataSource.initialize().then(() => console.log('Connected to MySQL server'));
};
