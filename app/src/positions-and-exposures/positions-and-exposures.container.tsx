import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { positionExposureActions } from '../actions/positions-exposures.actions';

interface PositionsAndExposuresProps  {
  title: string;
  onFetch: () => void;
}

export class PositionsAndExposures extends React.Component<PositionsAndExposuresProps, void> {
  render() {
    const {title, onFetch} = this.props;
    return (
      <div>
        <div>{title}</div>
        <div>
          <button onClick={onFetch}>Fetch data</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): Partial<PositionsAndExposuresProps> => ({
  title: state.positionExposures.title
});

const mapDispatchToProps = {
  onFetch: positionExposureActions.fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionsAndExposures);
