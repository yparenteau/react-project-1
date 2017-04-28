import * as React from 'react';
import { AppProps } from './app.props';

export interface AppState {
  currentNumber: number;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      currentNumber: props.currentNumber ? props.currentNumber : 0,
    };
  }

  public render() {
    const {currentNumber} = this.state;

    return (
      <div>
        <div>number: {currentNumber}</div>
        <div>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }

  private increment = () => {
    const {currentNumber} = this.state;
    this.setState({currentNumber: currentNumber + 2});
  }
}
