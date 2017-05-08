export interface EligibilityState {
  title: string;
}

const INITIAL_STATE: EligibilityState = {
  title: 'Eligibility'
};

export default function eligibilityReducer(state: EligibilityState = INITIAL_STATE, action: any): EligibilityState {
  switch (action.type) {
    default:
      return state;
  }
}
