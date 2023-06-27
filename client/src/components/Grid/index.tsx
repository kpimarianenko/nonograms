import { View } from 'react-native';

import theme from '@theme';
import baseStyles from '@theme/styles';

import Cell from './Cell';
import { CellState } from './types';

interface GridProps {
  cells: Array<Array<CellState>>;
  filledColor?: string;
  cellSize?: number;
}

const Grid = ({ cells, cellSize = 25, filledColor = theme.tint }: GridProps) => (
  <View>
    {cells.map((row, i) => (
      <View key={`row-${i}`} style={baseStyles.row}>
        {row.map((state, j) => (
          <Cell
            key={`${i}:${j}`}
            state={state}
            size={cellSize}
            filledColor={filledColor}
            isEndOfRow={j === row.length - 1}
            isEndOfCol={i === cells.length - 1}
          />
        ))}
      </View>
    ))}
  </View>
);

export { CellState };
export default Grid;
