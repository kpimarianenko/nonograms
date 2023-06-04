export enum FontWeight {
  Thin = '100',
  ExtraLight = '200',
  Light = '300',
  Regular = '400',
  Medium = '500',
  SemiBold = '600',
  Bold = '700',
  ExtraBold = '800',
  Black = '900'
}

export enum FontFamily {
  MontserratAlternates = 'MontserratAlternates',
  BadScript = 'BadScript'
}

export interface IFontFamily {
  Thin?: string;
  ThinItalic?: string;
  Light?: string;
  LightItalic?: string;
  ExtraLight?: string;
  ExtraLightItalic?: string;
  Regular: string;
  RegularItalic?: string;
  Medium?: string;
  MediumItalic?: string;
  SemiBold?: string;
  SemiBoldItalic?: string;
  Bold?: string;
  BoldItalic?: string;
  ExtraBold?: string;
  ExtraBoldItalic?: string;
  Black?: string;
  BlackItalic?: string;
}

type FontDictionary = {
  [key in FontFamily]: IFontFamily;
};

export const fonts: FontDictionary = {
  [FontFamily.MontserratAlternates]: {
    Thin: 'MontserratAlternates-Thin',
    ThinItalic: 'MontserratAlternates-ThinItalic',
    Light: 'MontserratAlternates-Light',
    LightItalic: 'MontserratAlternates-LightItalic',
    ExtraLight: 'MontserratAlternates-ExtraLight',
    ExtraLightItalic: 'MontserratAlternates-ExtraLightItalic',
    Regular: 'MontserratAlternates-Regular',
    RegularItalic: 'MontserratAlternates-Italic',
    Medium: 'MontserratAlternates-Medium',
    MediumItalic: 'MontserratAlternates-MediumItalic',
    SemiBold: 'MontserratAlternates-SemiBold',
    SemiBoldItalic: 'MontserratAlternates-SemiBoldItalic',
    Bold: 'MontserratAlternates-Bold',
    BoldItalic: 'MontserratAlternates-BoldItalic',
    ExtraBold: 'MontserratAlternates-ExtraBold',
    ExtraBoldItalic: 'MontserratAlternates-ExtraBoldItalic',
    Black: 'MontserratAlternates-Black',
    BlackItalic: 'MontserratAlternates-BlackItalic'
  },
  [FontFamily.BadScript]: {
    Regular: 'BadScript-Regular'
  }
};
