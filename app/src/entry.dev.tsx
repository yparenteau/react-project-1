import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
// TODO: Should not be included in production
import { configureStoreDev } from './store/configure-store.dev';

const store = configureStoreDev();

const render = () => {
  const Root = require('./containers/index').default;
  ReactDOM.render(
    <AppContainer>
      <Root store={store} />
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
