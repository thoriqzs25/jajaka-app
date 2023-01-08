import { AuthReducerAction } from "@cTypes/states/auth";

const defaultState = {
  loggedIn: false,
  email: ''
}

const authReducer = (prevState = defaultState, action: AuthReducerAction) => {
  switch(action.type) {
    case 'USER_LOGIN':
      return {
        ...prevState,
        loggedIn: true,
        email: action.email
      }
    case 'USER_LOGOUT':
      return {
        defaultState
      }
    default: 
      return prevState;
  }
}

export default authReducer