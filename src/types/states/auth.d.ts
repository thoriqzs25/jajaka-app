export interface AuthReducerState {
  email?: string;
  token?: string;
}

export type AuthReducerAction = { type: 'USER_LOGIN'; token: string; email: string } | { type: 'USER_LOGOUT' };
