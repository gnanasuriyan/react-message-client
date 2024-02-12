import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from '~/literals';

import { Message, MessageState } from '~/types';

export const messageState: MessageState = {
  messages: [],
  loadStatus: STATUS.IDLE,
  postStatus: STATUS.IDLE,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState: messageState,
  reducers: {
    postMessage: draft => {
      draft.postStatus = STATUS.RUNNING;
    },
    postMessageSuccess: draft => {
      draft.postStatus = STATUS.SUCCESS;
    },
    postMessageFailure: draft => {
      draft.postStatus = STATUS.IDLE;
    },
    getMessageList: draft => {
      draft.loadStatus = STATUS.RUNNING;
    },
    getMessageListSuccess: (
      draft,
      { payload }: PayloadAction<Array<Message>>,
    ) => {
      draft.loadStatus = STATUS.SUCCESS;
      draft.messages = payload;
    },
    getMessageListFailure: draft => {
      draft.loadStatus = STATUS.IDLE;
    },
  },
});

export const { getMessageList, getMessageListFailure, getMessageListSuccess, postMessage, postMessageSuccess, postMessageFailure } = messageSlice.actions;
export default messageSlice.reducer;
