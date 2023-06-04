import palette from './palette';

const theme = {
  primary: palette.cyanAzure,
  secondary: palette.white,
  text: {
    base: palette.white
  },
  input: {
    text: palette.cyanAzure,
    gradient: [palette.antiFlashWhite_tE0, palette.antiFlashWhite_t50],
    borderGradient: [palette.white, palette.antiFlashWhite_t50]
  }
};

export default theme;
