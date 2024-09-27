import { IPersonale } from "./IPersonale";

export interface IOffice{
  codiceUfficio:string;
  codiceUfficioSuperiore?:string;
  nomeUfficio:string;
  nomeTitolare:string;
  coloreSfondo?:string;
  descrizioneUfficio?: string;
  ordineVisualizzazione?: number;
  children:Array<IOffice>;
  personale?: Array<IPersonale>;
}
