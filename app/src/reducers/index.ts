import { combineReducers } from 'redux';
import counterReducer, { CounterState } from './counter.reducer';

export interface RootState {
  counter: CounterState;
}

export default combineReducers<RootState>({
  counter: counterReducer
});
