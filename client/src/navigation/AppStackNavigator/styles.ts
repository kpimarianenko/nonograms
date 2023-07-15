import { StyleSheet } from 'react-native';

import theme from '@theme';

import { headerHeight, headerHorizontalPadding } from './constants';

const styles = StyleSheet.create({
  header: {
    height: headerHeight,
    backgroundColor: theme.transparent,
    shadowOpacity: 0,
    elevation: 0
  },
  headerItem: {
    paddingHorizontal: headerHorizontalPadding
  }
});

export default styles;
