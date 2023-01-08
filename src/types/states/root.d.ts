export interface RootState {
  auth: {
    loggedIn?: boolean;
    email?: string;
  }
}