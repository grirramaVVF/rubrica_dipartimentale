import { IUserHeadOffice } from "./IUserHeadOffice";

export interface IToken {
  sub: string;
  iss: string;
  tipo: string;
  sedi: Array<IUserHeadOffice>,
  aud: string,
  name: string,
  iat: number
  exp: number,
}
