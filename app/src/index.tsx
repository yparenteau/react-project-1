import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers/App/App';
import { AppContainer } from 'react-hot-loader';

declare const module: { hot: any };

/* tslint:disable */
// Component parameters needs to be Uppercase.
const render = (Component: any) => {
/* tslint:enable */
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    // HTML root element for React app
    document.getElementById('root'));
};

render(App);

if (module.hot) {
  module.hot.accept();
  // TODO: In most example 'accept' is not empty but I can make it to work with it...
  // module.hot.accept('./containers/App/App', () => {
  //   // If we receive a HMR request for our App container,
  //   // then reload it using require (we can't do this dynamically with import)
  //   const NextApp = require('./containers/App/App').default;
  //   render(NextApp);
  // });
}
