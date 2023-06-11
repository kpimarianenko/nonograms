import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';

import UsersResolver from './src/resolvers/users.resolver';

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
