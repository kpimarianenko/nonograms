import { useMemo } from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

import { FontFamily, fonts, FontWeight, IFontFamily } from '@theme/fonts';

type FontWeightDictionary = {
  [key in TextStyle['fontWeight'] as string]: keyof typeof FontWeight;
};

const fontWeights: FontWeightDictionary = {
  [FontWeight.Thin]: 'Thin',
  [FontWeight.ExtraLight]: 'ExtraLight',
  [FontWeight.Light]: 'Light',
  [FontWeight.Regular]: 'Regular',
  normal: 'Regular',
  [FontWeight.Medium]: 'Medium',
  [FontWeight.SemiBold]: 'SemiBold',
  [FontWeight.Bold]: 'Bold',
  bold: 'Bold',
  [FontWeight.ExtraLight]: 'ExtraBold',
  [FontWeight.Black]: 'Black'
};

const getFontStyle = (styles: TextStyle): TextStyle => {
  const {
    fontFamily = FontFamily.MontserratAlternates,
    fontWeight = '400',
    fontStyle = 'normal'
  } = styles;

  const isCustomFont = Object.values<string>(FontFamily).includes(fontFamily);

  if (!isCustomFont) {
    return { fontFamily, fontWeight, fontStyle };
  }

  const isItalic = fontStyle === 'italic';
  const family = fonts[fontFamily as FontFamily];
  const fontWeightLiteral = fontWeights[fontWeight];

  return {
    fontFamily:
      (isItalic
        ? family[`${fontWeightLiteral}Italic` as keyof IFontFamily]
        : family[fontWeightLiteral]) || family.Regular
  };
};

export const useFontStyle = (style: StyleProp<TextStyle>) => {
  const { fontFamily, fontWeight, fontStyle, ...otherStyles } = StyleSheet.flatten(style) || {};

  const fontStyles = useMemo(
    () =>
      getFontStyle({
        fontFamily,
        fontWeight,
        fontStyle
      }),
    [fontFamily, fontWeight, fontStyle]
  );

  return {
    ...otherStyles,
    ...fontStyles
  };
};
