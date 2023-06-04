import { StyleProp, TextInput, TextInputProps, ViewStyle } from 'react-native';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';

import { useFontStyle } from '@hooks/useFontStyle';

import gradients from '@theme/gradients';

import styles from './styles';

interface InputProps extends TextInputProps {
  icon?: IconDefinition;
  iconSize?: number;
  iconStyle?: FontAwesomeIconStyle;
  containerStyle?: StyleProp<ViewStyle>;
}

const Input = ({ icon, iconSize = 24, style, iconStyle, containerStyle, ...props }: InputProps) => {
  const styleWithFont = useFontStyle(style);

  return (
    <LinearGradient {...gradients.input} style={[styles.container, containerStyle]}>
      {icon ? (
        <FontAwesomeIcon icon={icon} style={[styles.icon, iconStyle]} size={iconSize} />
      ) : null}
      <TextInput {...props} style={[styles.input, styleWithFont]} />
    </LinearGradient>
  );
};

export default Input;
