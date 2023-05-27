import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from '@navigation/AppStackNavigator';

const App = () => (
  <NavigationContainer>
    <AppStackNavigator isAuthenticated={false} />
  </NavigationContainer>
);

export default App;
