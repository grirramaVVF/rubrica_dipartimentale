export interface IOffice{
  codiceUfficio:string;
  codiceUfficioSuperiore?:string;
  nomeUfficio:string;
  nomeTitolare:string;
  coloreSfondo?:string;
  descrizioneUfficio?: string;
  children:[];
}
