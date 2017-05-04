import { History } from 'history';
import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { Router } from 'react-router';
import { HistoryUnsubscribe } from 'react-router-redux';
import { RootState } from '../reducers';
import Counter from './counter';

import '../../assets/sass/main.scss';

export interface RootProps {
  store: Store<RootState>;
  history: History & HistoryUnsubscribe;
}

// TODO: Stateless component?
export default class extends React.Component<RootProps, void> {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <Counter />
        </Router>
      </Provider>
    );
  }
}

// <Router history={history} routes={routes} />
// <DevTools />
