import * as React from 'react';
import * as ReactDOM from 'react-dom';
// TODO: Should not be included in production
import configureStore from './store/configure-store.dev';
import Root from './containers';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

const store = configureStore();

// TODO: duplicated
declare const module: { hot: any };

ReactDOM.render(
  <AppContainer >
    <Root store={store}/>
  </AppContainer >,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/index', () => {
    const NewRoot = require('./containers/index').default;
    ReactDOM.render(
      <AppContainer>
        <NewRoot store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
