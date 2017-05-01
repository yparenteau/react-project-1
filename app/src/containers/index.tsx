import { Provider } from 'react-redux';
import * as React from 'react';
import { RootState } from '../reducers';
import Counter from './counter';

export interface RootProps {
  store: RootState;
  // dispatch: Dispatch<{}>;
}

// export class Root extends React.Component<RootProps, void> {
export default class extends React.Component<any, void> {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div> I AM THE ROOT
          <Counter />
        </div>
      </Provider>
    );
  }
}

// <Router history={history} routes={routes} />
// <DevTools />
