import { createStore, Store } from 'redux';
import rootReducer, { RootState } from '../reducers';

declare const module: { hot: any };

export default function configureStore(initialState?: RootState): Store<RootState> {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      console.log('HOT IS ENABLED');
      const nextReducer = require('../reducers/index').default;
      console.log(nextReducer);
      store.replaceReducer(nextReducer);
    });
  }

  // TODO
  return store;
}


// const middlewares: Middleware[] = [];
// const composeEnhancers =
//   DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
// const store = createStore(rootReducer, initialState, composeEnhancers(
//   applyMiddleware(...middlewares),
// ));
