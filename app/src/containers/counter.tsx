import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/counter.actions';
import { RootState } from '../reducers';

interface CounterProps {
  currentNumber?: number;
  incrementCounter: () => void;
}

class Counter extends React.Component<CounterProps, void> {
  render() {
    return (
      <div>
        <div>Number: {this.props.currentNumber}</div>
        <div>
          <button onClick={this.props.incrementCounter}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  currentNumber: state.counter.currentNumber
});

const mapDispatchToProps = {
  incrementCounter: actions.incrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
