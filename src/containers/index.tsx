import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { ShellHeaderContainer } from 'bnym-shell';
import { RootState } from '../reducers';
import PositionsAndExposures from './positions-and-exposures.container';
import Eligibility from './eligibility.container';
import { TopNavigationContainer } from './top-navigation.container';

import 'minireset.css/minireset.css';
import '../assets/fonts/akkurat/akkurat.scss';
import '../assets/fonts/akkurat-bold/akkurat-bold.scss';
import '../assets/sass/main.scss';
import '../assets/sass/bnym-shell.scss';

interface RootProps {
  store: Store<RootState>;
}

const Root: React.StatelessComponent<RootProps> = props => {
  const {store} = props;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <ShellHeaderContainer />
          <TopNavigationContainer />
          <Switch>
            <Route path="/positions-and-exposures" component={PositionsAndExposures as any} />
            <Route path="/eligibility" component={Eligibility as any} />
            <Redirect from="/" to="/positions-and-exposures" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
