import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { Redirect, Route, Router } from 'react-router';
import { RootState } from '../reducers';
import { PositionsAndExposures } from '../positions-and-exposures/positions-and-exposures.container';
import { Eligibility } from '../eligibility/eligibility.container';
import createBrowserHistory from 'history/createBrowserHistory';

import '../../assets/sass/main.scss';
import { Navigation } from '../navigation/navigation.container';

export interface RootProps {
  store: Store<RootState>;
}

// TODO: Stateless component?
export default class extends React.Component<RootProps, void> {
  render() {
    const history = createBrowserHistory();
    return (
      <Provider store={this.props.store}>
        <Router history={history}>
          <div>
            <Navigation />
            <Route path="/positions-and-exposures" component={PositionsAndExposures as any} />
            <Route path="/eligibility" component={Eligibility as any} />
            <Redirect from="/" to="/positions-and-exposures" />
          </div>
        </Router>
      </Provider>
    );
  }
}
