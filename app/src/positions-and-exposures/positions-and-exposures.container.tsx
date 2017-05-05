import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';

interface PositionsAndExposuresProps  {
  title: string;
}

export class PositionsAndExposures extends React.Component<PositionsAndExposuresProps, void> {
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): Partial<PositionsAndExposuresProps> => ({
  title: state.positionExposures.title
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionsAndExposures);
