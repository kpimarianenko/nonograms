import 'react-native-gesture-handler';
import { useEffect, useRef } from 'react';

import { ApolloProvider } from '@apollo/client';

import client from '@client';

import ToastProvider from '@components/Toasts';
import { ToastHandle } from '@components/Toasts/types';

import AppStackNavigator from '@navigation/AppStackNavigator';
import NavigationContainer from '@navigation/NavigationContainer';

import ToastService from '@services/toastService';

import useAuth from '@hooks/useAuth';

import { I18Provider } from '@i18n';

const App = () => {
  const toastRef = useRef<ToastHandle>(null);

  const { isAuthorized, listenAuthChange, prepareToListenAuthChange } = useAuth();

  useEffect(listenAuthChange, [listenAuthChange]);

  useEffect(() => {
    prepareToListenAuthChange();
    ToastService.init(toastRef);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <I18Provider>
      <ToastProvider ref={toastRef}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <AppStackNavigator isAuthorized={!!isAuthorized} />
          </NavigationContainer>
        </ApolloProvider>
      </ToastProvider>
    </I18Provider>
  );
};

export default App;
