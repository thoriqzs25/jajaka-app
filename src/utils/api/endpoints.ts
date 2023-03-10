export const API = {
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    verifySend: (email: string) => `/auth/verify/send?email=${email}`,
    resetPassword: '/auth/reset-password',
  },
  news: {
    allNews: '/news',
    queryNews: (nId?: number, q?: string) => `/news/search?news_id=${nId ?? 0}&q=${q ?? ''}`,
  },
  user: {
    //PUT
    updatePhoto: '/user/profile/image',
    changePassword: '/user/profile/password',
  },
};
