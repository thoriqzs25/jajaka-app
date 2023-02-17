export interface ErrorReducerState {
  message?: string | null;
}

export type ErrorReducerAction = { type: 'RESET_ERROR_MESSAGE' } | { type: 'SET_ERROR_MESSAGE'; payload: string };
