import { store } from '@src/redux/store';
import { axiosRequest } from '@src/utils/api/api';
import { API } from '@src/utils/api/endpoints';
import axios from 'axios';
import { autoLogin } from './auth';

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

    await autoLogin();
    return response;
  } catch (e) {
    console.log('line 40', e);
  }
};
