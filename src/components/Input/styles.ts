import { StyleSheet } from 'react-native';

import theme from '@theme';
import { FontWeight } from '@theme/fonts';

const styles = StyleSheet.create({
  border: {
    padding: 2
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderLeftColor: theme.secondary
  },
  input: {
    flex: 1,
    color: theme.input.text,
    fontWeight: FontWeight.SemiBold,
    padding: 0
  },
  icon: {
    color: theme.primary,
    marginRight: 10
  }
});

export default styles;
