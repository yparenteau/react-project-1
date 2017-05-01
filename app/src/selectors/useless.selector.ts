import { createSelector } from 'reselect';
import { RootState } from '../reducers/index';

export const uselessSelector = createSelector (
  (state: RootState): number => state.counter.currentNumber,
  (currentNumber: number): string => {
    return `Useless value from selector: ${currentNumber}` ;
  }
);
