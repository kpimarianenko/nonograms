import { StyleProp, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import Text from '@components/Text';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
}

const Button = ({ title, titleStyle, style, ...props }: ButtonProps) => (
  <TouchableOpacity style={[styles.container, style]} {...props}>
    <Text style={[styles.title, titleStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
