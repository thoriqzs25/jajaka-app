import { setErrorMessage } from '@src/redux/actions/error';
import { store } from '@src/redux/store';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://api.berjajaka.com';
// const BASE_URL = 'http://101.50.2.188';

export const axiosRequest = async <T>(params: AxiosRequestConfig, firebaseToken?: string): Promise<T> => {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  // cleanup authorization
  axios.defaults.headers.common.Authorization = '';
  delete axios.defaults.headers.common.Authorization;

  // const token = firebaseToken || (await auth().currentUser?.getIdToken());
  // axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';

  axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
    if (config?.url && config?.method) {
      try {
        // @ts-ignore
        const httpMetric = perf().newHttpMetric(config.url, config.method);
        // @ts-ignore
        config.metadata = { httpMetric };

        await httpMetric.start();
      } finally {
        return config;
      }
    }

    return config;
  });

  axios.interceptors.response.use(
    async function (response) {
      try {
        // @ts-ignore
        const { httpMetric } = response.config.metadata;
        httpMetric.setHttpResponseCode(response.status);
        httpMetric.setResponseContentType(response.headers['content-type']);
        await httpMetric.stop();
      } finally {
        return response;
      }
    },
    async function (error) {
      try {
        const { httpMetric } = error.config.metadata;
        httpMetric.setHttpResponseCode(error.response.status);
        httpMetric.setResponseContentType(error.response.headers['content-type']);
        await httpMetric.stop();
      } finally {
        return Promise.reject(error);
      }
    }
  );

  return new Promise((resolve, reject) => {
    axios
      .request(params)
      .then((result) => {
        if (result.data.error) {
          const payload = result?.data?.error?.response.data.detail ?? '';
          store.dispatch(setErrorMessage(payload));

          reject(result?.data?.error ?? '');
          return;
        }

        __DEV__ &&
          console.log(
            `%cAPI SUCCESS ${result.config.method}: ${result.config.url}`,
            'background: #bada55; color: black',
            result
          );
        resolve(result.data);
      })
      .catch((error: AxiosError<{ detail: string }>) => {
        __DEV__ &&
          console.log(`%cAPI ERROR ${error?.config?.method}: ${error?.config?.url}`, 'background: red; color: black', {
            error,
          });

        if (error?.message === 'Network Error') store.dispatch(setErrorMessage('Kamu Offline!'));
        else {
          const payload = error?.response?.data?.detail ?? null;
          if (payload !== null) store.dispatch(setErrorMessage(payload));
        }

        // store.dispatch(setErrorMessage(payload.detail));

        // if (error?.message === 'Network Error') navigate('OfflineNotice');
        // !__DEV__ && ENV === 'staging' && store.dispatch(setErrorId(error?.response?.data.header.requestId));
        // const payload = errorHandler(error?.response?.data?.error?.code ?? '', error.config.url);

        reject(error?.response?.data);
      });
  });
};
