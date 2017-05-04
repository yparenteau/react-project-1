import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './containers/index';
import { configureRouter } from './routing/configure-router';
import { configureStore } from './store/configure-store';

const store = configureStore();
const history = configureRouter(store);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
