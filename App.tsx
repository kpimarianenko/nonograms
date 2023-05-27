import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from '@navigation/AppStackNavigator';

const App = () => (
  <NavigationContainer>
    <AppStackNavigator isAuthorized={false} />
  </NavigationContainer>
);

export default App;
