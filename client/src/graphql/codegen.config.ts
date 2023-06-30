import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.API_HOST,
  documents: 'src/graphql/**/*.gql',
  generates: {
    'src/graphql/index.ts': {
      overwrite: true,
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        defaultBaseOptions: {
          fetchPolicy: 'network-only',
          nextFetchPolicy: 'network-only'
        }
      }
    }
  }
};

export default config;
