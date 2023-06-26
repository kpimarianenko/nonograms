import { StyleSheet } from 'react-native';

import theme from '@theme';

const styles = StyleSheet.create({
  cell: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: theme.secondary
  },
  fill: {
    backgroundColor: theme.secondary
  },
  rowEnd: {
    borderRightWidth: 1
  },
  colEnd: {
    borderBottomWidth: 1
  }
});

export default styles;
