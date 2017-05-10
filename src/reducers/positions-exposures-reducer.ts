export interface PositionExposuresState {
  title: string;
}

const INITIAL_STATE: PositionExposuresState = {
  title: 'Positions and exposures'
};

export default function positionExposuresReducer(state: PositionExposuresState = INITIAL_STATE, action: any): PositionExposuresState {
  switch (action.type) {
    default:
      return state;
  }
}
