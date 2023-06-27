import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import ToastService from '@services/toastService';

import config from '@constants/config';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError) {
    ToastService.error({ title: 'Network Error', message: networkError.message });

    // eslint-disable-next-line no-console
    console.error(`Network error: ${networkError.message}`);
  }

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, extensions, locations, path }) => {
      ToastService.error({ title: 'Error', message });

      // eslint-disable-next-line no-console
      console.error(
        `GraphQL error: ${message}\n` +
          `Path: ${path}\nCode: ${extensions.code}\nLocation: ${JSON.stringify(locations)}`
      );
    });
  }
});

const httpLink = new HttpLink({ uri: config.apiHost });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink])
});

export default client;
