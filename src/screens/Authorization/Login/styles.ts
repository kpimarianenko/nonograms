import { StyleSheet } from 'react-native';

import { FontWeight } from '@theme/fonts';
import baseStyles from '@theme/styles';

const styles = StyleSheet.create({
  formFooter: {
    ...baseStyles.rowSpaceBetween,
    width: '100%'
  },
  forgotPassword: {
    fontWeight: FontWeight.Medium
  }
});

export default styles;
