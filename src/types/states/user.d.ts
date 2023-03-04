import { PhotoData } from '../props/auth';

export interface UserReducerState {
  consultant?: Consultant | null;
  email?: string | null;
  id?: number | null;
  is_consultant?: boolean | null;
  name?: string | null;
  phone?: number | null;
  profile_url?: string | null;
}

export type Consultant = {
  id?: string | null;
  category?: string | null;
  type?: string | null;
  bio?: string | null;
};

export type UserReducerAction =
  | {
      type: 'USER_INFO';
      payload: UserReducerState;
    }
  | {
      type: 'UPDATE_PHOTO';
      base64: string;
    }
  | { type: 'REMOVE_USER' };
