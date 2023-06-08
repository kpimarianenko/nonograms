import { createStackNavigator } from '@react-navigation/stack';

import { AppStackParams, RouteName } from '@navigation/types';

import LoginScreen from '@screens/Authorization/Login';
import RegisterScreen from '@screens/Authorization/Register';
import HomeScreen from '@screens/Home';

interface AppStackNavigatorProps {
  isAuthorized: boolean;
}

const Stack = createStackNavigator<AppStackParams>();

const AppStackNavigator = ({ isAuthorized }: AppStackNavigatorProps) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {isAuthorized ? (
      <>
        <Stack.Screen name={RouteName.Home} component={HomeScreen} />
      </>
    ) : (
      <>
        <Stack.Screen name={RouteName.Login} component={LoginScreen} />
        <Stack.Screen name={RouteName.Register} component={RegisterScreen} />
      </>
    )}
  </Stack.Navigator>
);

export default AppStackNavigator;
