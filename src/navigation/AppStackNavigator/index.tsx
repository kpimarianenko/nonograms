import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteName } from '@navigation/types';

import LoginScreen from '@screens/Authentication/Login';
import RegisterScreen from '@screens/Authentication/Register';
import HomeScreen from '@screens/Home';

interface AppStackNavigatorProps {
  isAuthenticated: boolean;
}

const Stack = createNativeStackNavigator();

const AppStackNavigator = ({ isAuthenticated }: AppStackNavigatorProps) => (
  <Stack.Navigator>
    {isAuthenticated ? (
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
