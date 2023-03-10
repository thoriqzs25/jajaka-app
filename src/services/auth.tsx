import { API } from '@utils/api/endpoints';
import { axiosRequest } from '@utils/api/api';
import { AuthResponse, SignInPayload, SignUpPayload } from '@cTypes/props/auth';
import { store } from '@src/redux/store';
import { userLogin, waitingVerif } from '@src/redux/actions/auth';
import { userInfo } from '@src/redux/actions/user';
import { setErrorMessage } from '@src/redux/actions/error';
import { DetailAndMessage, GeneralResponse } from '@src/types/props/request';

export const signIn = async (payload: SignInPayload) => {
  try {
    const response = (await axiosRequest({
      method: 'POST',
      url: API.auth.signIn,
      data: payload,
    })) as AuthResponse;

    // store.dispatch(setErrorMessage(response.message));
    if (response.message) store.dispatch(userInfo({ payload: response.data.user }));
    store.dispatch(userLogin({ token: response.data.access_token, email: response.data.user.email }));
    return response;
  } catch (e) {
    return e;
    // throw e;
  }
};

export const signUp = async (payload: SignUpPayload) => {
  try {
    const response = (await axiosRequest({
      method: 'POST',
      url: API.auth.signUp,
      data: payload,
    })) as AuthResponse;

    // store.dispatch(
    //   userLogin({ token: response.data.access_token, email: response.data.user.email, phone: response.data.user.phone })
    // );
    store.dispatch(waitingVerif({ token: response.data.access_token, email: payload.email }));
    return response;
  } catch (e) {
    console.log('line 40', e);
  }
};

export const resendVerification = async (email: string) => {
  try {
    const response = (await axiosRequest({
      method: 'POST',
      url: API.auth.verifySend(email),
    })) as AuthResponse;

    // store.dispatch(userLogin({ token: response.data.access_token, email: response.data.user.email }));
    return response;
  } catch (e) {
    console.log('line 40', e);
    throw e;
  }
};

export const autoLogin = async () => {
  const { auth } = store.getState();

  try {
    const response = (await axiosRequest({
      method: 'GET',
      url: '/user',
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })) as AuthResponse;

    if (response && auth.token) {
      store.dispatch(userInfo({ payload: response.data.user }));
      store.dispatch(userLogin({ token: auth.token, email: response.data.user.email }));
    }

    return response;
  } catch (e) {
    console.log('line 52', e);
    throw e;
  }
};

export const changePassword = async (payload: { new_password: string; old_password: string }) => {
  const { auth } = store.getState();

  try {
    const response = (await axiosRequest({
      method: 'PUT',
      url: API.user.changePassword,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: payload,
    })) as AuthResponse;

    // console.log('line 91', response);
    return response;
  } catch (e) {
    console.log('line 40', e);
    throw e;
  }
};

export const resetPassword = async (email: string) => {
  const payload = {
    email: email,
  };
  try {
    const response = (await axiosRequest({
      method: 'PUT',
      url: API.auth.resetPassword,
      data: payload,
    })) as DetailAndMessage;
    // })) as GeneralResponse<DetailAndMessage>;

    return response;
  } catch (e) {
    console.log('line 40', e);
    throw e;
  }
};
