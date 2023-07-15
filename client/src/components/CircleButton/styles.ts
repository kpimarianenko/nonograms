import { StyleSheet } from 'react-native';

import theme from '@theme';

import { buttonBorderRadius, buttonSize } from './constants';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.secondary,
    borderRadius: buttonBorderRadius,
    width: buttonSize,
    height: buttonSize,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: theme.secondary
  }
});

export default styles;
