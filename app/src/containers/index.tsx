import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { RootState } from '../reducers';
import Counter from './counter';

export interface RootProps {
  store: Store<RootState>;
}

// TODO: Stateless component?
export default class extends React.Component<RootProps, void> {
  render(): JSX.Element {
    return (
      <Provider store={this.props.store}>
        <div> I AM THE ROOT
          <Counter />
        </div>
      </Provider>
    );
  }
}

// <Router history={history} routes={routes} />
// <DevTools />
