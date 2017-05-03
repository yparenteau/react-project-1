import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/counter.actions';
import { UselessLabel } from '../components/useless-label';
import { RootState } from '../reducers';
import { uselessSelector } from '../selectors/useless.selectors';

interface CounterProps {
  currentNumber: number;
  incrementCounter: () => void;
  uselessLabel: string;
}

const { counter } = require('./counter.scss');

class Counter extends React.Component<CounterProps, void> {
  render() {
    return (
      <div className={counter}>
        <UselessLabel text={this.props.uselessLabel} />
        <div>The current number: {this.props.currentNumber}</div>
        <div>
          <button onClick={this.props.incrementCounter}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): Partial<CounterProps> => ({
  currentNumber: state.counter.currentNumber,
  uselessLabel: uselessSelector(state)
});

const mapDispatchToProps = {
  incrementCounter: actions.incrementCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
