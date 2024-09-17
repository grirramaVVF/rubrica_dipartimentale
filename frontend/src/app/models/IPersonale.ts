import { IContatto } from "./IContatto";

export interface IPersonale{
  nominativo: string;
  qualifica: string;
  codiceUfficio: string;
  contatti: Array<IContatto>;
}
