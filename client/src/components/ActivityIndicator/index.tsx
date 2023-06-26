import { useCallback, useEffect, useMemo, useState } from 'react';

import Grid from '@components/Grid';
import { CellState } from '@components/Grid/types';

import theme from '@theme';

import { IndicatorSize } from './types';

interface ActivityIndicatorProps {
  size?: number;
  color?: string;
  intervalDuration?: number;
}

const GRID_SIZE = 2;

const ActivityIndicator = ({
  size = IndicatorSize.Medium,
  color = theme.tint,
  intervalDuration = 300
}: ActivityIndicatorProps) => {
  const [inactiveCellCoords, setInactiveCellCoords] = useState({ i: 0, j: 0 });

  const updateState = useCallback(() => {
    const { i, j } = inactiveCellCoords;
    const updatedCoords = { ...inactiveCellCoords };

    if (!i && !j) updatedCoords.j = updatedCoords.j + 1;
    else if (!i && j) updatedCoords.i = updatedCoords.i + 1;
    else if (i && j) updatedCoords.j = updatedCoords.j - 1;
    else if (i && !j) updatedCoords.i = updatedCoords.i - 1;

    setInactiveCellCoords(updatedCoords);
  }, [inactiveCellCoords]);

  useEffect(() => {
    const intervalId = setInterval(() => updateState(), intervalDuration);

    return () => clearInterval(intervalId);
  }, [updateState, intervalDuration]);

  const cells = useMemo(
    () =>
      Array.from({ length: GRID_SIZE }, (_, i) =>
        Array.from({ length: GRID_SIZE }, (_, j) =>
          i === inactiveCellCoords.i && j === inactiveCellCoords.j
            ? CellState.Unmarked
            : CellState.Filled
        )
      ),
    [inactiveCellCoords.i, inactiveCellCoords.j]
  );

  return <Grid cells={cells} cellSize={size / GRID_SIZE} filledColor={color} />;
};

export { IndicatorSize };
export default ActivityIndicator;
