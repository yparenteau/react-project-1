import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { RootState } from '../reducers';
import PositionsAndExposures from './positions-and-exposures.container';
import Eligibility from './eligibility.container';

import { Navigation } from './navigation.container';
import { NavigationContainer } from 'bny-shell';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import * as ES6Promise from 'es6-promise';

// TODO: Should be done at the bootstrapping
ES6Promise.polyfill();

import '../../assets/sass/main.scss';

interface RootProps {
  store: Store<RootState>;
}

const Root: React.StatelessComponent<RootProps> = props => {
  const {store} = props;
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavigationContainer />
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
