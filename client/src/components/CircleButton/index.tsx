import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { iconSize } from './constants';

import styles from './styles';

interface CircleButtonProps extends TouchableOpacityProps {
  icon: IconProp;
}

const CircleButton = ({ icon, ...props }: CircleButtonProps) => (
  <TouchableOpacity style={styles.container} {...props}>
    <FontAwesomeIcon style={styles.icon} icon={icon} size={iconSize} />
  </TouchableOpacity>
);

export default CircleButton;
