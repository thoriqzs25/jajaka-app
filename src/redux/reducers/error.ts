import { ErrorReducerAction, ErrorReducerState } from '@src/types/states/error';

const defaultState = {
  message: null,
} as ErrorReducerState;

const errorReducer = (prevState = defaultState, action: ErrorReducerAction) => {
  switch (action.type) {
    case 'RESET_ERROR_MESSAGE':
      return {
        ...prevState,
        message: null,
      };
    case 'SET_ERROR_MESSAGE':
      return {
        ...prevState,
        message: action.payload,
      };
    default:
      return prevState;
  }
};

export default errorReducer;
