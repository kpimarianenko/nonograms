import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from '@navigation/AppStackNavigator';

import { I18Provider } from '@i18n';

const App = () => (
  <I18Provider>
    <NavigationContainer>
      <AppStackNavigator isAuthorized={false} />
    </NavigationContainer>
  </I18Provider>
);

export default App;
