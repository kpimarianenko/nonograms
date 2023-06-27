import { StyleSheet } from 'react-native';

import theme from '@theme';

const styles = StyleSheet.create({
  root: {
    zIndex: 1,
    left: 0,
    right: 0,
    opacity: 0.85,
    position: 'absolute'
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  icon: {
    marginRight: 10,
    color: theme.secondary
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  },
  message: {
    marginTop: 3
  },
  progressBar: {
    height: 3,
    backgroundColor: theme.secondary
  }
});

export default styles;
