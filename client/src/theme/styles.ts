import { StyleSheet } from 'react-native';

import theme from '@theme';

const baseStyles = StyleSheet.create({
  flex: {
    flex: 1
  },
  text: {
    color: theme.text.base
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default baseStyles;
