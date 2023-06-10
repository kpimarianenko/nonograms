import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle
} from 'react-native';

import Text from '@components/Text';

import styles from './styles';

interface LinkProps extends TouchableOpacityProps {
  title: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const Link = ({ title, style, containerStyle, ...props }: LinkProps) => (
  <TouchableOpacity style={containerStyle} {...props}>
    <Text style={[styles.link, style]}>{title}</Text>
  </TouchableOpacity>
);

export default Link;
