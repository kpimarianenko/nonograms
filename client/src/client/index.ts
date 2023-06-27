import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { storage } from '@storage';

import ToastService from '@services/toastService';

import config from '@constants/config';

import { localeCodeStorageKey } from '@i18n/constants';

import { tokenStorageKey } from './constants';

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

const authLink = setContext(async (_, { headers }) => {
  const token = await storage.getItem(tokenStorageKey);
  const localeCode = await storage.getItem(localeCodeStorageKey);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'x-locale-code': localeCode
    }
  };
});

const httpLink = new HttpLink({ uri: config.apiHost });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, authLink, httpLink])
});

export default client;
