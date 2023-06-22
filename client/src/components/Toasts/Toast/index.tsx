import { useEffect, useMemo } from 'react';
import { View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import Text from '@components/Text';

import baseStyles from '@theme/styles';

import { getContainerStyleByMessageType, getIconByMessageType } from './utils';
import { Toast } from '../types';

import styles from './styles';

const slideOutEasing = Easing.out(Easing.cubic);
const slideInEasing = Easing.in(Easing.cubic);

const slideMinOffset = 0;
const slideMaxOffset = -100;

const minProgress = 0;
const maxProgress = 100;

interface ToastProps {
  toast: Toast;
  shift: () => void;
  iconSize?: number;
  slideDuration?: number;
}

const ToastComponent = ({ toast, shift, iconSize = 32, slideDuration = 350 }: ToastProps) => {
  const { type, title, subtitle, duration = 3000 } = toast;

  const offset = useSharedValue(slideMaxOffset);
  const progress = useSharedValue(minProgress);

  const containerStyle = useMemo(() => getContainerStyleByMessageType(type), [type]);
  const icon = useMemo(() => getIconByMessageType(type), [type]);

  const animatedContainerStyles = useAnimatedStyle(() => ({
    top: `${offset.value}%`
  }));

  const animatedProgressBarStyles = useAnimatedStyle(() => ({
    width: `${progress.value}%`
  }));

  useEffect(() => {
    offset.value = withTiming(slideMinOffset, { duration: slideDuration, easing: slideOutEasing });
    progress.value = withTiming(maxProgress, {
      duration,
      easing: Easing.linear
    });

    setTimeout(() => {
      offset.value = withTiming(
        slideMaxOffset,
        {
          duration: slideDuration,
          easing: slideInEasing
        },
        () => {
          progress.value = 0;
          runOnJS(shift)();
        }
      );
    }, duration - slideDuration);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);

  return (
    <View style={styles.root}>
      <Animated.View style={[containerStyle, animatedContainerStyles]}>
        <View style={styles.contentContainer}>
          <FontAwesomeIcon style={styles.icon} icon={icon} size={iconSize} />
          <View style={baseStyles.flex}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
        <Animated.View style={[styles.progressBar, animatedProgressBarStyles]} />
      </Animated.View>
    </View>
  );
};

export default ToastComponent;
