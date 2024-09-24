import { IOffice } from "../../models/IOffice";

export interface IRubricaState {
  rubrica: Array<IOffice>;
  ufficioSelezionato: IOffice;
  ufficioSelezionatoPrecedente: IOffice;
}

export const inizializeRubricaState: IRubricaState = {
  rubrica: [],
  ufficioSelezionato: {
    codiceUfficio: "",
    nomeUfficio: "",
    nomeTitolare: "",
    children: []
  },
  ufficioSelezionatoPrecedente: {
    codiceUfficio: "",
    nomeUfficio: "",
    nomeTitolare: "",
    children: []
  }
}
