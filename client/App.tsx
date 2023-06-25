import 'react-native-gesture-handler';
import { useEffect, useRef } from 'react';

import { ApolloProvider } from '@apollo/client';

import client from '@client';

import ToastProvider from '@components/Toasts';
import { ToastHandle } from '@components/Toasts/types';

import AppStackNavigator from '@navigation/AppStackNavigator';
import NavigationContainer from '@navigation/NavigationContainer';

import ToastService from '@services/toastService';

import { I18Provider } from '@i18n';

const App = () => {
  const toastRef = useRef<ToastHandle>(null);

  useEffect(() => ToastService.init(toastRef), []);

  return (
    <I18Provider>
      <ToastProvider ref={toastRef}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <AppStackNavigator isAuthorized={false} />
          </NavigationContainer>
        </ApolloProvider>
      </ToastProvider>
    </I18Provider>
  );
};

export default App;
