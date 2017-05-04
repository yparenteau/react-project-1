import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureRouter } from './routing/configure-router';
import { configureStoreDev } from './store/configure-store.dev';

const store = configureStoreDev();
const history = configureRouter(store);

const render = () => {
  const Root = require('./containers/index').default;
  ReactDOM.render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./containers/index', () => {
    render();
  });
}

render();
