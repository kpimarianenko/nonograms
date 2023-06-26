import { StyleProp, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import ActivityIndicator, { IndicatorSize } from '@components/ActivityIndicator';
import Text from '@components/Text';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  titleStyle?: StyleProp<TextStyle>;
}

const Button = ({
  title,
  loading = false,
  disabled: disabledProp = false,
  titleStyle,
  style,
  ...props
}: ButtonProps) => {
  const disabled = disabledProp || loading;

  return (
    <TouchableOpacity
      style={[styles.container, style, disabled && styles.disabledContainer]}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size={IndicatorSize.Small} />
      ) : (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
