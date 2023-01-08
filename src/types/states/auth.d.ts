export interface AuthReducerState {
  loggedIn?: boolean;
  email?: string;
}

export type AuthReducerAction = 
{type: 'USER_LOGIN'; token: string; email: string} |
{type: 'USER_LOGOUT'}