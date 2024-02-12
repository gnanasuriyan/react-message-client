import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { alertShow, signup, signupFailure, signupSuccess } from '~/actions';
import { apiBaseUrl } from '~/config';

export function* signupSaga({ payload}: ReturnType<typeof signup>) {
  try {
    yield call(axios.post, `${apiBaseUrl}/api/v1/signup`, payload);
    yield put(signupSuccess());
  } catch(error: any) {
    yield put(signupFailure());
    yield put(alertShow(error.response.data, { type: 'error', icon: 'bell', timeout: 10 }));
  }  
}

export default function* root() {
  yield all([takeLatest(signup.type, signupSaga)]);
}
