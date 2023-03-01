export const userLogin = ({ token, email }: { token?: string; email?: string }) => ({
  type: 'USER_LOGIN',
  token: token,
  email: email,
});

export const userLogout = () => ({
  type: 'USER_LOGOUT',
});

export const waitingVerif = ({ token, email }: { token?: string; email?: string }) => ({
  type: 'WAITING_VERIF',
  token: token,
  email: email,
});
