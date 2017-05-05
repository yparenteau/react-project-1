import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';

interface EligibilityProps  {
  title: string;
}

const Eligibility: React.StatelessComponent<EligibilityProps> = props => (
  <div>
    {props.title}
  </div>
);

const mapStateToProps = (state: RootState): Partial<EligibilityProps> => ({
  title: 'Eligibility'
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Eligibility);
