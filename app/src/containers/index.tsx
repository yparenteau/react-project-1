import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { RootState } from '../reducers';
import PositionsAndExposures from './positions-and-exposures.container';
import Eligibility from './eligibility.container';
import { Navigation } from './navigation.container';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import '../../assets/sass/main.scss';

import { ShellHeaderContainer } from 'bny-shell';

interface RootProps {
  store: Store<RootState>;
}

const Root: React.StatelessComponent<RootProps> = props => {
  const {store} = props;
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ShellHeaderContainer />
          <Navigation />
          <Switch>
            <Route path="/positions-and-exposures" component={PositionsAndExposures as any} />
            <Route path="/eligibility" component={Eligibility as any} />
            <Redirect from="/" to="/positions-and-exposures" />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default Root;
