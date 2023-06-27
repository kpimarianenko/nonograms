import { StyleProp, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';

import Text from '@components/Text';

import { useFontStyle } from '@hooks/useFontStyle';

import gradients from '@theme/gradients';
import baseStyles from '@theme/styles';

import styles from './styles';

interface InputProps extends TextInputProps {
  icon?: IconDefinition;
  error?: string | null;
  hideError?: boolean;
  disabled?: boolean;
  iconSize?: number;
  iconStyle?: FontAwesomeIconStyle;
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
}

const Input = ({
  icon,
  value,
  error,
  hideError = false,
  editable: editableProp = true,
  disabled = false,
  iconSize = 24,
  style,
  iconStyle,
  containerStyle,
  wrapperStyle,
  ...props
}: InputProps) => {
  const editable = editableProp && !disabled;
  const styleWithFont = useFontStyle(style);

  return (
    <View style={wrapperStyle}>
      {!hideError && <Text style={styles.error}>{error || ' '}</Text>}
      <LinearGradient
        {...gradients.input}
        style={[styles.container, disabled && styles.disabled, containerStyle]}
      >
        <View style={baseStyles.row}>
          {icon ? (
            <FontAwesomeIcon icon={icon} style={[styles.icon, iconStyle]} size={iconSize} />
          ) : null}
          <TextInput
            value={value || ''}
            editable={editable}
            {...props}
            style={[styles.input, styleWithFont]}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Input;
