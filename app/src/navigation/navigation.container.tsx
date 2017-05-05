import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../reducers';

export class Navigation extends React.Component<{}, void> {
  render() {
    return (
     <div>
      <header>
        <Link to="/positions-and-exposures">Positions and exposures</Link>
        {' '}
        <Link to="/eligibility">Eligibility</Link>
      </header>
    </div>
    );
  }
}

const mapStateToProps = (state: RootState): Partial<{}> => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
