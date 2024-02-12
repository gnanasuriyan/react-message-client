import axios from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { alertShow, getMessageList, getMessageListFailure, getMessageListSuccess, postMessage, postMessageSuccess, postMessageFailure } from '~/actions';
import { apiBaseUrl } from '~/config';
import { selectUser } from '~/selectors';

export function* getMessageListSaga({ payload }: ReturnType<typeof getMessageList>) {
  try {
    const user = yield select(selectUser);
    const response = yield call(axios.get, `${apiBaseUrl}/api/v1/messages?page=1&limit=50`, {
      headers: {
        'X-Auth-User-Id': user.user.id
      }
    });
    yield put(getMessageListSuccess(response.data));
  } catch(error: any) {
    yield put(getMessageListFailure());
    yield put(alertShow(error.response.data, { type: 'error', icon: 'bell', timeout: 10 }));
  } 
}

export function* postMessageSaga({ payload }: ReturnType<typeof postMessage>) {
  try {
    const user = yield select(selectUser);
    yield call(axios.post, `${apiBaseUrl}/api/v1/message`, payload, {
      headers: {
        'X-Auth-User-Id': user.user.id
      }
    });
    yield put(postMessageSuccess());
  } catch(error: any) {
    yield put(postMessageFailure());
    yield put(alertShow(error.response.data, { type: 'error', icon: 'bell', timeout: 10 }));
  }
  yield put(getMessageList());
}

export default function* root() {
  yield all([takeLatest(getMessageList.type, getMessageListSaga), takeLatest(postMessage.type, postMessageSaga)]);
}
