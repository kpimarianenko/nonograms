import { Text, TextProps } from 'react-native';

import { useFontStyle } from '@hooks/useFontStyle';

import baseStyles from '@theme/styles';

const CustomText = ({ style, children, ...props }: TextProps) => {
  const styleWithFont = useFontStyle(style);

  return (
    <Text style={[baseStyles.text, styleWithFont]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
