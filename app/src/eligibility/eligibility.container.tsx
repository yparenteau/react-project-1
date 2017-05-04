import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';

interface EligibilityProps  {
  title: string;
}

export class Eligibility extends React.Component<EligibilityProps, void> {
  render() {
    return (
      <div>
        Eligibility
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): Partial<EligibilityProps> => ({
  title: 'Eligibility'
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Eligibility);
