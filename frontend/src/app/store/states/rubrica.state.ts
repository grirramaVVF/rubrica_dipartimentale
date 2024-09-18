import { IOffice } from "../../models/IOffice";

export interface IRubricaState {
  rubrica: Array<IOffice>;
  ufficioSelezionato: IOffice|{};

}

export const inizializeRubricaState: IRubricaState = {
  rubrica: [],
  ufficioSelezionato: {}
}
