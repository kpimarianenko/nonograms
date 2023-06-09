import { StyleSheet } from 'react-native';

import { IndicatorSize } from '@components/ActivityIndicator';

import theme from '@theme';
import { FontWeight } from '@theme/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  disabledContainer: {
    opacity: 0.5
  },
  title: {
    fontSize: 16,
    lineHeight: IndicatorSize.Small,
    fontWeight: FontWeight.Bold,
    textAlign: 'center'
  }
});

export default styles;
