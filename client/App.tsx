import 'react-native-gesture-handler';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import AppStackNavigator from '@navigation/AppStackNavigator';
import NavigationContainer from '@navigation/NavigationContainer';

import config from '@constants/config';

import { I18Provider } from '@i18n';

const client = new ApolloClient({
  uri: config.apiHost,
  cache: new InMemoryCache()
});

const App = () => (
  <I18Provider>
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppStackNavigator isAuthorized={false} />
      </NavigationContainer>
    </ApolloProvider>
  </I18Provider>
);

export default App;
