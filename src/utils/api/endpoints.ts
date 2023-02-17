export const API = {
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
  },
  news: {
    allNews: '/news',
    queryNews: (nId?: number, q?: string) => `/news/search?news_id=${nId ?? 0}&q=${q ?? ''}`,
  },
};
