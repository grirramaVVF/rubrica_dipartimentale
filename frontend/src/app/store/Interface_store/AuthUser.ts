import { AuthUserData } from "./AuthUserData";

export interface AuthUser {
  token: string,
  timingToken: number,
  decodeToken: any,
  loggedUser: AuthUserData | null;
  isLoading: boolean;
  error: string;
}