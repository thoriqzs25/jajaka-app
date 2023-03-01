import { AuthReducerAction, AuthReducerState } from '@cTypes/states/auth';

const defaultState = {
  email: null,
  token: null,
  loggedIn: null,
} as AuthReducerState;

const authReducer = (prevState = defaultState, action: AuthReducerAction) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...prevState,
        email: action.email,
        token: action.token,
        loggedIn: true,
      };
    case 'USER_LOGOUT':
      return {
        defaultState,
      };
    case 'WAITING_VERIF':
      return {
        ...prevState,
        token: action.token,
        email: action.email,
      };
    default:
      return prevState;
  }
};

export default authReducer;
