import { combineReducers } from 'redux';
import positionExposuresReducer, { PositionExposuresState } from './positions-exposures-reducer';
import eligibilityReducer, { EligibilityState } from './eligibility.reducer';

export interface RootState {
  positionExposures: PositionExposuresState;
  eligibility: EligibilityState;
}

export default combineReducers<RootState>({
  eligibility: eligibilityReducer,
  positionExposures: positionExposuresReducer
});
