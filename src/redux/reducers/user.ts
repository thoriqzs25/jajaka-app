import { UserReducerAction, UserReducerState } from '@cTypes/states/user.d';
import { AuthReducerAction, AuthReducerState } from '@cTypes/states/auth';

const defaultState = {
  consultant: null,
  email: null,
  id: null,
  is_consultant: null,
  name: null,
  phone: null,
  profile_url: null,
} as UserReducerState;

const userReducer = (prevState = defaultState, action: UserReducerAction) => {
  switch (action.type) {
    case 'USER_INFO':
      return {
        ...prevState,
        consultant: action.payload.consultant,
        email: action.payload.email,
        id: action.payload.id,
        is_consultant: action.payload.is_consultant,
        name: action.payload.name,
        phone: action.payload.phone,
        profile_url: action.payload.profile_url,
      };
    case 'REMOVE_USER':
      return {
        defaultState,
      };
    default:
      return prevState;
  }
};

export default userReducer;
