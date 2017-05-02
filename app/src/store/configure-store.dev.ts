import { createStore, Store } from 'redux';
import rootReducer, { RootState } from '../reducers';

export function configureStoreDev(initialState?: RootState): Store<RootState> {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const nextReducer = require('../reducers/index').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

// const middlewares: Middleware[] = [];
// const composeEnhancers =
//   DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
// const store = createStore(rootReducer, initialState, composeEnhancers(
//   applyMiddleware(...middlewares),
// ));
