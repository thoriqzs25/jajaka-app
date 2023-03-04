import { UserData } from '@src/types/props/auth';
import { UserReducerState } from '@src/types/states/user';

export const userInfo = ({ payload }: { payload: UserData }) => ({
  type: 'USER_INFO',
  payload: payload,
});

export const updatePhoto = ({ photoData }: { photoData: string }) => ({
  type: 'UPDATE_PHOTO',
  base64: photoData,
});

export const removeUser = () => ({
  type: 'REMOVE_USER',
});
