import counterReducer, { CounterState } from './counter.reducer';
import { combineReducers } from 'redux';

export interface RootState {
  counter: CounterState;
}

export default combineReducers<RootState>({
  counter: counterReducer
});
