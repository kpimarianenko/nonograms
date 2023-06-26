import palette from './palette';

const theme = {
  primary: palette.cyanAzure,
  secondary: palette.white,
  tint: palette.antiFlashWhite,
  transparent: palette.transparent,
  text: {
    base: palette.white
  },
  input: {
    text: palette.cyanAzure,
    error: palette.red,
    gradient: [palette.antiFlashWhite_tE0, palette.antiFlashWhite_t50],
    borderGradient: [palette.white, palette.antiFlashWhite_t50]
  },
  toasts: {
    danger: palette.jellyBean,
    warning: palette.goldenPoppy,
    success: palette.apple,
    info: palette.pictonBlue
  }
};

export default theme;
