import { faArrowLeft, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { createStackNavigator } from '@react-navigation/stack';

import CircleButton from '@components/CircleButton';

import { AppStackParams, RouteName } from '@navigation/types';

import LoginScreen from '@screens/Authorization/Login';
import RegisterScreen from '@screens/Authorization/Register';
import HomeScreen from '@screens/Home';
import SettingsScreen from '@screens/Settings';

import styles from './styles';

interface AppStackNavigatorProps {
  isAuthorized: boolean;
}

const Stack = createStackNavigator<AppStackParams>();

const AppStackNavigator = ({ isAuthorized }: AppStackNavigatorProps) => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerShown: false,
      headerStyle: styles.header,
      headerLeftContainerStyle: styles.headerItem,
      headerRightContainerStyle: styles.headerItem,
      headerLeft: () =>
        navigation.canGoBack() && <CircleButton icon={faArrowLeft} onPress={navigation.goBack} />,
      headerTitle: ''
    })}
  >
    {isAuthorized ? (
      <Stack.Group screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name={RouteName.Home}
          component={HomeScreen}
          options={({ navigation }) => ({
            headerLeft: () => <CircleButton icon={faRightFromBracket} />,
            headerRight: () => (
              <CircleButton icon={faGear} onPress={() => navigation.navigate(RouteName.Settings)} />
            )
          })}
        />
        <Stack.Screen name={RouteName.Settings} component={SettingsScreen} />
      </Stack.Group>
    ) : (
      <>
        <Stack.Screen name={RouteName.Login} component={LoginScreen} />
        <Stack.Screen name={RouteName.Register} component={RegisterScreen} />
      </>
    )}
  </Stack.Navigator>
);

export default AppStackNavigator;
