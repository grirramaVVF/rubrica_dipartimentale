
export interface IAuthUserState {
  token: string;
  decodeToken: any;
  loggedUser: string;
  isLoading: boolean;
  error: string;
}

export const initialAuthState: IAuthUserState = {
  token: '',
  decodeToken: {},
  loggedUser: '',
  isLoading: false,
  error: '',
};
