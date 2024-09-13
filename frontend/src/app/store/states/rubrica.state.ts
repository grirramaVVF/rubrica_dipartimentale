import { IOffice } from "../../models/IOffice";

export interface IRubricaState {
  rubrica: Array<IOffice>;
}

export const inizializeRubricaState: IRubricaState = {
  rubrica: []
}
