import { ImageBackground } from 'react-native';

import {
  DefaultTheme,
  NavigationContainer,
  NavigationContainerProps
} from '@react-navigation/native';

import baseStyles from '@theme/styles';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
};

const CustomNavigationContainer = ({ children, ...props }: NavigationContainerProps) => (
  <ImageBackground style={baseStyles.flex} source={require('@assets/images/background/night.png')}>
    <NavigationContainer {...props} theme={navTheme}>
      {children}
    </NavigationContainer>
  </ImageBackground>
);

export default CustomNavigationContainer;
