import { createSelector } from 'reselect';
import { RootState } from '../reducers/index';
import { uselessMapper } from '../view-mappers/useless.view-mapper';

export const uselessSelector = createSelector (
  (state: RootState): number => state.counter.currentNumber,
  (currentNumber: number): string => {
    return uselessMapper(currentNumber);
  }
);
