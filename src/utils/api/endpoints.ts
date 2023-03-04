export const API = {
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    verifySend: (email: string) => `/auth/verify/send?email=${email}`,
  },
  news: {
    allNews: '/news',
    queryNews: (nId?: number, q?: string) => `/news/search?news_id=${nId ?? 0}&q=${q ?? ''}`,
  },
  user: {
    updatePhoto: '/user/profile/image',
  },
};
