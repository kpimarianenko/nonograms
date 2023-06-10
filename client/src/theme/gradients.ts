import { LinearGradientProps } from 'react-native-linear-gradient';

import theme from '@theme';

interface GradientDictionary {
  [key: string]: LinearGradientProps;
}

const gradients: GradientDictionary = {
  input: {
    colors: theme.input.gradient,
    start: { x: 0.15, y: 0 },
    end: { x: 0.85, y: 0 }
  }
};

export default gradients;
