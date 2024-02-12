import { ReactNode } from 'react';
import { Types } from '@gilbarbara/components';
import { Dispatch } from 'redux';
import { ValueOf } from 'type-fest';

import { AlertPosition, AlertType, Status } from './common';
import { User } from './user';
import { Message } from './message';

export interface AlertData {
  icon: Types.Icons;
  id: string;
  message: ReactNode;
  position: AlertPosition;
  timeout: number;
  type: AlertType;
}

export interface AlertsState {
  data: AlertData[];
}

export interface AppState {
  query: string;
}

export interface MessageState {
  messages: Array<Message>;
  loadStatus: ValueOf<Status>;
  postStatus: ValueOf<Status>;
}

export interface UserState {
  isAuthenticated: boolean;
  status: ValueOf<Status>;
  user: User;
}

export interface RootState {
  alerts: AlertsState;
  user: UserState;
  app: AppState;
  message: MessageState;
  signup: SignupState;
}

export interface WithDispatch {
  dispatch: Dispatch;
}

export interface SignupState {
  status: ValueOf<Status>;
}