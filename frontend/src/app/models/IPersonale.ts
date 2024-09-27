import { IContatto } from "./IContatto";

export interface IPersonale{
  cognome: string;
  nome: string;
  qualifica: string;
  codiceUfficio: string;
  contatti: Array<IContatto>;
}
