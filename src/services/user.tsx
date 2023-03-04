import { store } from '@src/redux/store';
import { axiosRequest } from '@src/utils/api/api';
import { API } from '@src/utils/api/endpoints';

export const updatePhotoUser = async (b64: string) => {
  const { auth } = store.getState();
  const formData = new FormData();

  // formData.append('image', {
  //   uri: b64,
  //   type: 'image/jpg'
  // });

  try {
    const response = await axiosRequest({
      method: 'PUT',
      url: API.user.updatePhoto,
      data: formData,
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-ype': 'multipart/form-data',
      },
    });

    // store.dispatch(
    //   userLogin({ token: response.data.access_token, email: response.data.user.email, phone: response.data.user.phone })
    // );
    // store.dispatch(waitingVerif({ token: response.data.access_token, email: payload.email }));
    return response;
  } catch (e) {
    console.log('line 40', e);
  }
};
