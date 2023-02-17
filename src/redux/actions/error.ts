export const resetErrorMessage = () => ({
  type: 'RESET_ERROR_MESSAGE',
});

export const setErrorMessage = (payload: string) => ({
  type: 'SET_ERROR_MESSAGE',
  payload,
});
