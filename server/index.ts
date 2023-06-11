import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';

import { connectDB } from '@db/connection';

import UsersResolver from '@resolvers/users.resolver';

dotenv.config();

const startApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: [UsersResolver],
    emitSchemaFile: true
  });

  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server);

  // eslint-disable-next-line no-console
  console.log(`Server ready at ${url}`);
};

startApolloServer();
connectDB();
