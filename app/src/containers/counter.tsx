import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/counter.actions';
import { RootState } from '../reducers';
import { UselessLabel } from '../components/useless-label';
import { uselessSelector } from '../selectors/useless.selector';

interface CounterProps {
  currentNumber?: number;
  incrementCounter: () => void;
  uselessLabel: string;
}

class Counter extends React.Component<CounterProps, void> {
  render() {
    return (
      <div>
        <UselessLabel text={this.props.uselessLabel} />
        <div>The current number: {this.props.currentNumber}</div>
        <div>
          <button onClick={this.props.incrementCounter}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  currentNumber: state.counter.currentNumber,
  uselessLabel: uselessSelector(state)
});

const mapDispatchToProps = {
  incrementCounter: actions.incrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
