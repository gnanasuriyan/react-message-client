import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '~/literals';
import { SignupState } from '~/types';

export const signupState: SignupState = {
  status: STATUS.IDLE
};

export const signupSlice = createSlice({
  name: 'user',
  initialState: signupState,
  reducers: {
    signup: draft => {
      draft.status = STATUS.RUNNING;
    },
    signupSuccess: (draft) => {
      draft.status = STATUS.READY;
    },
    signupFailure: draft => {
      draft.status = STATUS.IDLE;
    }
  },
});

export const { signup, signupSuccess, signupFailure } = signupSlice.actions;
export default signupSlice.reducer;
