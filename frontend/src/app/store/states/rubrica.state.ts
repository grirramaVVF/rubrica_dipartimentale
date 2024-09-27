import { IOffice } from "../../models/IOffice";

export interface IRubricaState {
  rubrica: Array<IOffice>;
  ufficioSelezionato: IOffice | null;
  ufficioSelezionatoPrecedente: IOffice | null;
}

export const inizializeRubricaState: IRubricaState = {
  rubrica: [],
  ufficioSelezionato: null,
  ufficioSelezionatoPrecedente: null
}
