import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './containers/index';
import { configureStore } from './store/configure-store';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
