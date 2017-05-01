import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configure-store';
import Root from './containers/index';

const store: any = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
