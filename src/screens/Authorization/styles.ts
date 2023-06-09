import { StyleSheet } from 'react-native';

import { FontFamily } from '@theme/fonts';

const authStyles = StyleSheet.create({
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
  input: {
    marginVertical: 10
  },
  button: {
    marginBottom: 5
  }
});

export default authStyles;
