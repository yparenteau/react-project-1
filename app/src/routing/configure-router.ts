import { createBrowserHistory } from 'history';
import { Store } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { RootState } from '../reducers/index';

// TODO: Return value should be History & HistoryUnsubscribe
export function configureRouter(store: Store<RootState>): any {
  return syncHistoryWithStore(createBrowserHistory() as any, store);
}
