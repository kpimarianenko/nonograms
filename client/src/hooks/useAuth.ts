import { useCallback, useState } from 'react';

import auth from '@react-native-firebase/auth';

import { logoutOnNextSessionStorageKey, tokenStorageKey } from '@client/constants';

import { useStorage } from '@storage';

interface SetAuthDataAttributes {
  token?: string;
  rememberMe: boolean;
}

const useAuth = () => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [isReadyToListen, setIsReadyToListen] = useState(false);

  const [, setToken] = useStorage<string | null>(tokenStorageKey, '');
  const [logoutOnNextSession, setLogoutOnNextSession] = useStorage<boolean>(
    logoutOnNextSessionStorageKey,
    false
  );

  const setAuthData = ({ token, rememberMe }: SetAuthDataAttributes) => {
    if (token) {
      setToken(token);
      setLogoutOnNextSession(!rememberMe);
    }
  };

  const markAsAuthorized = () => setIsAuthorized(true);

  const markAsUnauthorized = useCallback(() => setIsAuthorized(false), []);

  const unauthorize = useCallback(() => {
    setToken(null);
    setLogoutOnNextSession(false);
    markAsUnauthorized();
  }, [setToken, setLogoutOnNextSession, markAsUnauthorized]);

  const authorize = useCallback(markAsAuthorized, []);

  const prepareToListenAuthChange = async () => {
    const user = auth().currentUser;

    if (user) {
      if (logoutOnNextSession) {
        await auth().signOut();
      }
    }

    setTimeout(() => setIsReadyToListen(true), 0);
  };

  const listenAuthChange = useCallback(() => {
    if (isReadyToListen) {
      const unsubscribe = auth().onAuthStateChanged(user => {
        if (user) {
          return authorize();
        }

        unauthorize();
      });

      return unsubscribe;
    }
  }, [isReadyToListen, authorize, unauthorize]);

  return {
    isAuthorized,
    isReadyToListen,
    listenAuthChange,
    prepareToListenAuthChange,
    setAuthData
  };
};

export default useAuth;
