import { store } from '@src/redux/store';
import { axiosRequest } from '@src/utils/api/api';
import { API } from '@src/utils/api/endpoints';
import axios from 'axios';

export const updatePhotoUser = async (formData: FormData) => {
  const { auth } = store.getState();

  try {
    const response = await fetch(`https://api.berjajaka.com/user/profile/image`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.log('line 26', e);
      });

    // store.dispatch(
    //   userLogin({ token: response.data.access_token, email: response.data.user.email, phone: response.data.user.phone })
    // );
    // store.dispatch(waitingVerif({ token: response.data.access_token, email: payload.email }));
    console.log('line 24', response);
    return response;
  } catch (e) {
    console.log('line 40', e);
  }
};
