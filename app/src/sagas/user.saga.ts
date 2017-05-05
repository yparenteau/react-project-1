import { call, put } from 'redux-saga/effects';
import { userService } from '../services/user.service';

export function* fetchUserSaga() {
  try {
    const users = yield call(userService.fetchUsers);
    yield put({type: 'USERS_FETCH_SUCCEEDED', users});
  } catch (e) {
    yield put({type: 'USERS_FETCH_FAILED', message: e.message});
  }
}
