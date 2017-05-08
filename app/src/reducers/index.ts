import { combineReducers } from 'redux';
import { ApplicationState, applicationReducer } from 'bny-shell';
import positionExposuresReducer, { PositionExposuresState } from './positions-exposures-reducer';
import eligibilityReducer, { EligibilityState } from './eligibility.reducer';

export interface RootState {
  application: ApplicationState;
  positionExposures: PositionExposuresState;
  eligibility: EligibilityState;
}

export default combineReducers<RootState>({
  application: applicationReducer,
  eligibility: eligibilityReducer,
  positionExposures: positionExposuresReducer
});
