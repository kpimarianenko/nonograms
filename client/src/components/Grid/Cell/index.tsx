import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming
} from 'react-native-reanimated';

import theme from '@theme';

import { CellState } from '../types';

import styles from './styles';

interface CellProps {
  state: CellState;
  size: number;
  filledColor: string;
  animationDuration?: number;
  isEndOfRow: boolean;
  isEndOfCol: boolean;
}

const minOpacity = 0;
const maxOpacity = 1;

const Cell = ({
  state,
  size,
  filledColor,
  animationDuration = 300,
  isEndOfRow,
  isEndOfCol
}: CellProps) => {
  const progress = useDerivedValue(() =>
    withTiming(state === CellState.Filled ? maxOpacity : minOpacity, {
      duration: animationDuration
    })
  );

  const animatedStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [minOpacity, maxOpacity],
      [theme.transparent, filledColor]
    );

    return {
      backgroundColor
    };
  });

  return (
    <Animated.View
      style={[
        styles.cell,
        { width: size, height: size },
        state === CellState.Filled && styles.fill,
        isEndOfRow && styles.rowEnd,
        isEndOfCol && styles.colEnd,
        animatedStyles
      ]}
    />
  );
};

export default Cell;
