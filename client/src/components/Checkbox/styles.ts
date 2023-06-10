import { StyleSheet } from 'react-native';

import theme from '@theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkContainer: {
    borderColor: theme.secondary,
    marginRight: 5,
    borderWidth: 2,
    borderRadius: 3
  },
  unchecked: {
    opacity: 0
  }
});

export default styles;
