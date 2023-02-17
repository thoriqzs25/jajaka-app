import { store } from '@src/redux/store';
import { AllNewsResponse } from '@src/types/props/news';
// import { GeneralResponse } from '@src/types/props/request';
import { axiosRequest } from '@src/utils/api/api';
import { API } from '@src/utils/api/endpoints';

export const allNews = async (page?: number) => {
  const { auth } = store.getState();
  try {
    const response = (await axiosRequest({
      method: 'GET',
      url: API.news.allNews,
      data: page ?? 0,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })) as AllNewsResponse;

    return response.data.news;
  } catch (e) {
    console.log('line 15', e);
    throw e;
  }
};

export const queryNews = async ({ nId, q }: { nId?: number; q?: string }) => {
  const { auth } = store.getState();
  try {
    const response = (await axiosRequest({
      method: 'GET',
      url: API.news.queryNews(nId, q),
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })) as AllNewsResponse;

    return response.data.news;
  } catch (e) {
    console.log('line 15', e);
    throw e;
  }
};
