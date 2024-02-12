import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~/types';

const selectSelf = (state: RootState) => state;

export const selectApp = createSelector(selectSelf, state => state.app);

export const selectMessage = createSelector(selectSelf, state => state.message);

export const selectUser = createSelector(selectSelf, state => state.user);

export const selectSignup = createSelector(selectSelf, state => state.signup);
