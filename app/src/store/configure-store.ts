import { createStore, Store } from 'redux';
import rootReducer, { RootState } from '../reducers';

export function configureStore(initialState?: RootState): Store<RootState> {
  return createStore(rootReducer, initialState);
}

// const middlewares: Middleware[] = [];
// const composeEnhancers =
//   DEBUG && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
// const store = createStore(rootReducer, initialState, composeEnhancers(
//   applyMiddleware(...middlewares),
// ));
