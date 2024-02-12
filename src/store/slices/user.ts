import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { STATUS } from '~/literals';

import { User, UserState } from '~/types';

export const userState: UserState = {
  isAuthenticated: false,
  status: STATUS.IDLE,
  user: {
    id: 0,
    username: ''
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    login: draft => {
      draft.status = STATUS.RUNNING;
    },
    loginSuccess: (draft, { payload }: PayloadAction<User>) => {
      draft.isAuthenticated = true;
      draft.status = STATUS.READY;
      draft.user = payload;
    },
    loginFailure: draft => {
      draft.isAuthenticated = false;
      draft.status = STATUS.IDLE;
    },
    logOut: draft => {
      draft.status = STATUS.RUNNING;
    },
    logOutSuccess: draft => {
      draft.isAuthenticated = false;
      draft.status = STATUS.IDLE;
      draft.user = {
        id: 0,
        username: ''
      }
    }
  },
});

export const { login, loginSuccess, logOut, logOutSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
