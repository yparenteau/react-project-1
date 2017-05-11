import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ShellHeaderContainer } from 'bnym-shell';
import { RootState } from '../reducers';
import { PositionsAndExposuresContainer } from './positions-and-exposures.container';
import { EligibilityContainer } from './eligibility.container';
import { TopNavigationContainer } from './top-navigation.container';

import '../assets/fonts/akkurat/akkurat.scss';
import '../assets/fonts/akkurat-bold/akkurat-bold.scss';
import '../assets/sass/global.scss';

interface RootProps {
  store: Store<RootState>;
}

const Root: React.StatelessComponent<RootProps> = props => (
  <Provider store={props.store}>
    <BrowserRouter>
      <div>
        <ShellHeaderContainer />
        <TopNavigationContainer />
        <Switch>
          <Route path="/positions-and-exposures" component={PositionsAndExposuresContainer as any} />
          <Route path="/eligibility" component={EligibilityContainer as any} />
          <Redirect from="/" to="/positions-and-exposures" />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default Root;
