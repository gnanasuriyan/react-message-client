import axios from 'axios';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { alertShow, login, loginSuccess, logOut, logOutSuccess } from '~/actions';
import { apiBaseUrl } from '~/config';
import { loginFailure } from '~/store/slices/user';

export function* loginSaga({ payload}: ReturnType<typeof login>) {
  try {
    const result = yield call(axios.post, `${apiBaseUrl}/api/v1/login`, payload);
    yield put(loginSuccess(result.data));
  } catch(error: any) {
    yield put(loginFailure());
    yield put(alertShow(error.response.data, { type: 'error', icon: 'bell', timeout: 10 }));
  }
  
}

export function* logoutSaga() {
  yield delay(200);
  // TODO: finish the logout flow
  yield put(logOutSuccess());
}

export default function* root() {
  yield all([takeLatest(login.type, loginSaga), takeLatest(logOut.type, logoutSaga)]);
}
