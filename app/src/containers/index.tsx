import { Provider } from 'react-redux';
import * as React from 'react';
import { RootState } from '../reducers';
import Counter from './counter';

export interface RootProps {
  store: RootState;
}

export default class extends React.Component<RootProps, void> {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div> I AM THE ROOT
          <Counter />
        </div>
      </Provider>
    );
  }
}

// <Router history={history} routes={routes} />
// <DevTools />
