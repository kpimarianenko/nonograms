import { StyleSheet } from 'react-native';

import { FontFamily, FontWeight } from '@theme/fonts';
import baseStyles from '@theme/styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontFamily: FontFamily.BadScript,
    fontSize: 36
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10
  },
  form: {
    alignItems: 'center'
  },
  formFooter: {
    ...baseStyles.rowSpaceBetween,
    width: '100%'
  },
  forgotPassword: {
    fontWeight: FontWeight.Medium
  },
  input: {
    marginVertical: 10
  },
  button: {
    marginBottom: 5
  }
});

export default styles;
