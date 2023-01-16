import { API } from '@utils/api/endpoints';
import { axiosRequest } from '@utils/api/api';
import { SignInPayload, SignUpPayload } from '@cTypes/props/auth';

export const signIn = async (payload: SignInPayload) => {
  try {
    const data = payload;

    const response = await axiosRequest({
      method: 'POST',
      url: API.auth.signIn,
      data: data,
    });

    // store.dispatch(setSkill(response.data));
    console.log(response, 'res line 16 test');
    return response;
  } catch (e) {
    throw e;
  }
};

export const signUp = async (payload: SignUpPayload) => {
  try {
    const data = payload;

    const response = await axiosRequest({
      method: 'POST',
      url: API.auth.signUp,
      data: data,
    });

    // store.dispatch(setSkill(response.data));
    console.log(response, 'res line 16 test');
    return response;
  } catch (e) {
    throw e;
  }
};
