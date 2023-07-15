import 'react-native-gesture-handler';
import { useEffect, useRef } from 'react';

import { ApolloProvider } from '@apollo/client';
import SplashScreen from 'react-native-splash-screen';

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

  const isAppReady = isAuthorized !== null;

  useEffect(listenAuthChange, [listenAuthChange]);

  useEffect(() => {
    prepareToListenAuthChange();
    ToastService.init(toastRef);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isAppReady) {
      SplashScreen.hide();
    }
  }, [isAppReady]);

  return (
    <I18Provider>
      <ToastProvider ref={toastRef}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            {isAppReady && <AppStackNavigator isAuthorized={!!isAuthorized} />}
          </NavigationContainer>
        </ApolloProvider>
      </ToastProvider>
    </I18Provider>
  );
};

export default App;
