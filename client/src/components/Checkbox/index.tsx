import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle
} from 'react-native';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';

import Text from '@components/Text';

import theme from '@theme';

import styles from './styles';

interface CheckboxProps extends Omit<TouchableOpacityProps, 'onPress'> {
  title: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  titleStyle?: StyleProp<TextStyle>;
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconStyle?: FontAwesomeIconStyle;
}

const Checkbox = ({
  title,
  checked,
  onChange,
  titleStyle,
  iconContainerStyle,
  iconStyle,
  style,
  ...props
}: CheckboxProps) => (
  <TouchableOpacity style={[styles.container, style]} {...props} onPress={() => onChange(!checked)}>
    <View style={[styles.checkContainer, iconContainerStyle]}>
      <FontAwesomeIcon
        icon={faCheck}
        color={theme.secondary}
        style={[iconStyle, checked ? {} : styles.unchecked]}
      />
    </View>
    <Text style={titleStyle}>{title}</Text>
  </TouchableOpacity>
);

export default Checkbox;
