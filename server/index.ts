import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import http from 'http';
import { buildSchema } from 'type-graphql';

import { Context } from '@types';

import { connectDB } from '@db/connection';

import config from '@constants/config';

import AuthResolver from '@resolvers/auth.resolver';
import UsersResolver from '@resolvers/users.resolver';

import { getTranslation } from '@i18n/helpers';
import { LocaleCode } from '@i18n/types';

const app = express();
const httpServer = http.createServer(app);

const startApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: [AuthResolver, UsersResolver],
    emitSchemaFile: true
  });

  const server = new ApolloServer<Context>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

  await server.start();

  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        const localeCodeHeader = req.headers['x-locale-code'];
        const localeCode = Array.isArray(localeCodeHeader)
          ? config.defaultLocaleCode
          : (localeCodeHeader as LocaleCode);

        return {
          string: getTranslation(localeCode)
        };
      }
    })
  );

  await new Promise<void>(resolve => {
    httpServer.listen({ port: config.port }, resolve);

    // eslint-disable-next-line no-console
    console.log(`Server ready at ${config.apolloGuiUrl}`);
  });
};

app.get('/', (_, res) => {
  fs.readFile(`${__dirname}/schema.gql`, 'utf8', (err, data) => {
    if (err) throw err;
    res.send(JSON.stringify(data));
  });
});

startApolloServer();
connectDB();
