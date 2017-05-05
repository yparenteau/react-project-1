import { fetchUserSaga } from './user.saga';
import { takeLatest } from 'redux-saga/effects';

export default function* () {
  yield takeLatest('USERS_FETCH_REQUESTED', fetchUserSaga);
}
