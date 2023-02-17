import { AuthReducerState } from './auth';
import { ErrorReducerState } from './error';

export interface RootState {
  auth: AuthReducerState;
  error: ErrorReducerState;
}
