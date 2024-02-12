import { all, fork } from 'redux-saga/effects';

import message from './message';
import user from './user';
import signup from './signup';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(message), fork(user), fork(signup)]);
}
