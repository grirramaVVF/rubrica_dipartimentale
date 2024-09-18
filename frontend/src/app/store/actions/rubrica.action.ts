import { createAction, props } from "@ngrx/store";
import { IOffice } from "../../models/IOffice";

export enum RubricaActionType {
  GetHomeRubrica = '[Get Home Rubrica] Get Home Rubrica',
  GetHomeRubricaSuccess = '[Get Home Rubrica] Get Home Rubrica Success',
  GetHomeRubricaError = '[Get Home Rubrica] Get Home Rubrica Error',

  GetPersonale = '[Get Personale] Get Personale',
  GetPersonaleSuccess = '[Get Personale] Get Personale',
  GetPersonaleError = '[Get Personale] Get Personale Error',

  GetUfficioSelezionato = '[Get Ufficio Selezionato] Get Ufficio Selezionato',
  GetUfficioSelezionatoSuccess = '[Get Ufficio Selezionato] Get Ufficio Selezionato Success',
  GetUfficioSelezionatoError = '[Get Ufficio Selezionato] Get Ufficio Selezionato Error',
  SetUfficioSelezionato = '[Set Ufficio Selezionato] Set Ufficio Selezionato',
  SetUfficioSelezionatoSuccess = '[Set Ufficio Selezionato] Set Ufficio Selezionato Success',
  SetUfficioSelezionatoError = '[Set Ufficio Selezionato] Set Ufficio Selezionato Error',

}

export const GetHomeRubrica = createAction(
  RubricaActionType.GetHomeRubrica,
  //props<{rubrica: Array<IOffice>}>()
);

export const GetHomeRubricaSuccess = createAction(
  RubricaActionType.GetHomeRubricaSuccess,
  //props<{rubrica: Array<IOffice>}>()
);

export const GetHomeRubricaError = createAction(
  RubricaActionType.GetHomeRubricaError
);

export const GetPersonale = createAction(
  RubricaActionType.GetPersonale,
  //props<{rubrica: Array<IOffice>}>()
);

export const GetPersonaleSuccess = createAction(
  RubricaActionType.GetPersonaleSuccess,
  //props<{rubrica: Array<IOffice>}>()
);

export const GetPersonaleError = createAction(
  RubricaActionType.GetPersonaleError
);

export const GetUfficioSelezionato = createAction(
  RubricaActionType.GetUfficioSelezionato,
  //props<{rubrica: Array<IOffice>}>()
);

export const GetUfficioSelezionatoSuccess = createAction(
  RubricaActionType.GetUfficioSelezionatoSuccess,
  //props<{rubrica: Array<IOffice>}>()
);

export const GetUfficioSelezionatoError = createAction(
  RubricaActionType.GetUfficioSelezionatoError
);

export const SetUfficioSelezionato = createAction(
  RubricaActionType.SetUfficioSelezionato,
  props<{ufficioSelezionato: IOffice}>()
);

export const SetUfficioSelezionatoSuccess = createAction(
  RubricaActionType.SetUfficioSelezionatoSuccess,
  //props<{rubrica: Array<IOffice>}>()
);

export const SetUfficioSelezionatoError = createAction(
  RubricaActionType.SetUfficioSelezionatoError
);
