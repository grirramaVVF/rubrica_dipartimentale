import { IUserOffice } from "./IToken";

export interface IUserHeadOffice {
  codSede: number,
  isSuperUser: boolean,
  uffici: Array<IUserOffice>
}
