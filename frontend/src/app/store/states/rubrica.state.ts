import { IOffice } from "../../models/IOffice";

export interface IRubricaState {
    rubrica: Array<IOffice>;
    ufficioSelezionato: IOffice | null;
    ufficioSelezionatoPrecedente: IOffice | null;
    elencoUfficiSelezionati: Array<IOffice | null> | null;
    homeTabSelected: string;
}

export const inizializeRubricaState: IRubricaState = {
    rubrica: [],
    ufficioSelezionato: null,
    ufficioSelezionatoPrecedente: null,
    elencoUfficiSelezionati: [],
    homeTabSelected: 'ufficiDipendenti'
}
