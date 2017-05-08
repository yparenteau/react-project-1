import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { RootState } from '../reducers';
import sagas from '../sagas';

export function configureStore(): Store<RootState> {
  const sagaMiddleware =  createSagaMiddleware();
  const enhancer = applyMiddleware(sagaMiddleware);
  const store =  createStore(rootReducer, enhancer);

  sagaMiddleware.run(sagas);

  return store;
}
