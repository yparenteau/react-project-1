import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { RootState } from '../reducers';
import sagas from '../sagas';

export function configureStoreDev(): Store<RootState> {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, enhancer);

  let sagaTask = sagaMiddleware.run(function* () {
    yield sagas();
  });

  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const nextReducer = require('../reducers/index').default;
      store.replaceReducer(nextReducer);
    });

    module.hot.accept('../sagas/index', () => {
      const getNewSagas = require('../sagas/index').default;

      sagaTask.cancel();
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(function* () {
          yield getNewSagas();
        });
      });
    });
  }

  return store;
}
