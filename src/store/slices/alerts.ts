import { ReactNode } from 'react';
import { uuid } from '@gilbarbara/helpers';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { actionBody } from '~/modules/helpers';

import { AlertData, AlertsState, ShowAlertOptions } from '~/types';

export const alertsState: AlertsState = {
  data: [],
};

export const alertsSlice = createSlice({
  name: 'alerts',
  initialState: alertsState,
  reducers: {
    alertHide: (state, { payload }: PayloadAction<string>) => {
      state.data = state.data.filter(d => d.id !== payload);
    },
    alertShow: {
      reducer: (state, { payload }: PayloadAction<AlertData>) => {
        state.data.push(payload);
      },
      prepare: (message: ReactNode, options: ShowAlertOptions) => {
        const timeout = options.type === 'error' ? 0 : 5;

        return actionBody({
          id: options.id ?? uuid(),
          icon: options.icon ?? 'info-o',
          message,
          position: options.position ?? 'bottom-right',
          type: options.type ?? 'neutral',
          timeout: typeof options.timeout === 'number' ? options.timeout : timeout,
        });
      },
    },
  },
});

export const { alertHide, alertShow } = alertsSlice.actions;

export default alertsSlice.reducer;
