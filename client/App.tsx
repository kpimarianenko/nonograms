import 'react-native-gesture-handler';

import AppStackNavigator from '@navigation/AppStackNavigator';
import NavigationContainer from '@navigation/NavigationContainer';

import { I18Provider } from '@i18n';

const App = () => (
  <I18Provider>
    <NavigationContainer>
      <AppStackNavigator isAuthorized={false} />
    </NavigationContainer>
  </I18Provider>
);

export default App;
