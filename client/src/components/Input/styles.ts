import { StyleSheet } from 'react-native';

import theme from '@theme';
import { FontWeight } from '@theme/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderLeftColor: theme.secondary
  },
  error: {
    marginLeft: 15,
    marginBottom: 2,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.25,
    fontWeight: '600',
    color: theme.input.error
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
