import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import http from 'http';
import { buildSchema } from 'type-graphql';

import { connectDB } from '@db/connection';

import UsersResolver from '@resolvers/users.resolver';

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

const startApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: [UsersResolver],
    emitSchemaFile: true
  });

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

  await server.start();

  app.use(cors(), bodyParser.json(), expressMiddleware(server));
  await new Promise<void>(resolve => {
    httpServer.listen({ port: process.env.PORT }, resolve);

    // eslint-disable-next-line no-console
    console.log(`Server ready at ${process.env.APOLLO_GUI_URL}`);
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
