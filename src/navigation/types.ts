import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export enum RouteName {
  Login = 'Login',
  Register = 'Register',
  Home = 'Home'
}

export type ScreenProps<T extends RouteName> = {
  route: RouteProp<AppStackParams, T>;
  navigation: StackNavigationProp<AppStackParams, T>;
};

export type AppStackParams = Omit<{ [T in RouteName]: undefined }, keyof ScreenParamsList> &
  ScreenParamsList;

export type ScreenParamsList = object;
