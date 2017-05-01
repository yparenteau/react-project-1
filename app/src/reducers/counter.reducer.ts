import { counterActions } from '../actions/counter.actions';

export interface CounterState {
  currentNumber: number;
}

const INITIAL_STATE: CounterState = {
  currentNumber: 10
};

export default function counterReducer(state: CounterState = INITIAL_STATE, action: any): CounterState {
  switch (action.type) {
    case counterActions.INCREMENT_COUNTER:
      return  {
        ...state,
        currentNumber: state.currentNumber + 5
      };

    default:
      return state;
  }
}
