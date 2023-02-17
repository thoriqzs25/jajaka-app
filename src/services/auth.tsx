import { API } from '@utils/api/endpoints';
import { axiosRequest } from '@utils/api/api';
import { AuthResponse, SignInPayload, SignUpPayload } from '@cTypes/props/auth';
import { store } from '@src/redux/store';
import { userLogin } from '@src/redux/actions/auth';

export const signIn = async (payload: SignInPayload) => {
  try {
    const response = (await axiosRequest({
      method: 'POST',
      url: API.auth.signIn,
      data: payload,
    })) as AuthResponse;

    store.dispatch(userLogin({ token: response.data.access_token, email: response.data.user.email }));
    return response;
  } catch (e) {
    throw e;
  }
};

export const signUp = async (payload: SignUpPayload) => {
  try {
    const response = (await axiosRequest({
      method: 'POST',
      url: API.auth.signUp,
      data: payload,
    })) as AuthResponse;

    store.dispatch(userLogin({ token: response.data.access_token, email: response.data.user.email }));
    return response;
  } catch (e) {
    console.log('line 40', e);
    throw e;
  }
};

export const testRoot = async () => {
  try {
    const response = await axiosRequest({
      method: 'GET',
      url: '/',
    });
    console.log(response, 'res line 50');
  } catch (e) {
    console.log('line 52', e);
    throw e;
  }
};
