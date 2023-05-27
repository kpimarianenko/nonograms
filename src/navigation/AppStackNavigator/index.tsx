import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteName } from '@navigation/types';

import LoginScreen from '@screens/Authorization/Login';
import RegisterScreen from '@screens/Authorization/Register';
import HomeScreen from '@screens/Home';

interface AppStackNavigatorProps {
  isAuthorized: boolean;
}

const Stack = createNativeStackNavigator();

const AppStackNavigator = ({ isAuthorized }: AppStackNavigatorProps) => (
  <Stack.Navigator>
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
