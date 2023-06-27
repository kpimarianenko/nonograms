import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
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
  gestureEventEndSlideDuration?: number;
  hideOffset?: number;
}

const ToastComponent = ({
  toast,
  shift,
  iconSize = 32,
  slideDuration = 350,
  gestureEventEndSlideDuration = 200,
  hideOffset = 30
}: ToastProps) => {
  const { type, title, message, duration = 4000 } = toast;

  const [isSliding, setIsSliding] = useState(true);
  const [autoHideTimeoutId, setAutoHideTimeoutId] = useState<ReturnType<typeof setTimeout>>();

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

  const setSliding = () => setIsSliding(true);

  const resetSliding = () => setIsSliding(false);

  const openToast = (duration: number = slideDuration) => {
    setSliding();
    offset.value = withTiming(
      slideMinOffset,
      {
        duration,
        easing: slideOutEasing
      },
      () => runOnJS(resetSliding)()
    );
  };

  const handleToastHide = () => {
    progress.value = 0;
    resetSliding();
    shift();
  };

  const hideToast = (duration: number = slideDuration) => {
    setSliding();
    offset.value = withTiming(
      slideMaxOffset,
      {
        duration,
        easing: slideInEasing
      },
      () => runOnJS(handleToastHide)()
    );
  };

  useEffect(() => {
    openToast();
    setAutoHideTimeoutId(setTimeout(() => hideToast(), duration - slideDuration));

    progress.value = withTiming(maxProgress, {
      duration,
      easing: Easing.linear
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);

  return (
    <GestureHandlerRootView style={styles.root}>
      <PanGestureHandler
        onGestureEvent={e => {
          if (isSliding) return;
          offset.value = Math.min(0, e.nativeEvent.translationY);
        }}
        onEnded={e => {
          if (isSliding) return;
          if (Math.abs(e.nativeEvent.translationY as number) >= hideOffset) {
            clearTimeout(autoHideTimeoutId);
            return hideToast(gestureEventEndSlideDuration);
          }

          offset.value = withTiming(slideMinOffset, {
            duration: gestureEventEndSlideDuration,
            easing: slideOutEasing
          });
        }}
      >
        <Animated.View style={[containerStyle, animatedContainerStyles]}>
          <View style={styles.contentContainer}>
            <FontAwesomeIcon style={styles.icon} icon={icon} size={iconSize} />
            <View style={baseStyles.flex}>
              <Text style={styles.title}>{title}</Text>
              {message && <Text style={styles.message}>{message}</Text>}
            </View>
          </View>
          <Animated.View style={[styles.progressBar, animatedProgressBarStyles]} />
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default ToastComponent;
