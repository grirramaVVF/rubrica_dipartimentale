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

  GetUfficioSelezionatoPrecedente = '[Get Ufficio Selezionato Precedente] Get Ufficio Selezionato Precedente',
  GetUfficioSelezionatoPrecedenteSuccess = '[Get Ufficio Selezionato Precedente] Get Ufficio Selezionato Precedente Success',
  GetUfficioSelezionatoPrecedenteError = '[Get Ufficio Selezionato Precedente] Get Ufficio Selezionato Precedente Error',
  SetUfficioSelezionatoPrecedente = '[Set Ufficio Selezionato Precedente] Set Ufficio Selezionato Precedente',
  SetUfficioSelezionatoPrecedenteSuccess = '[Set Ufficio Selezionato Precedente] Set Ufficio Selezionato Precedente Success',
  SetUfficioSelezionatoPrecedenteError = '[Set Ufficio Selezionato Precedente] Set Ufficio Selezionato Precedente Error',

  GetHomeTabSelected = '[Get HomeTabSelected] Get HomeTabSelected',
  GetHomeTabSelectedSuccess = '[Get HomeTabSelected] Get HomeTabSelected Success',
  GetHomeTabSelectedError = '[Get HomeTabSelected] Get HomeTabSelected Error',
  SetHomeTabSelected = '[Set HomeTabSelected] Set HomeTabSelected',
  SetHomeTabSelectedSuccess = '[Set HomeTabSelected] Set HomeTabSelected Success',
  SetHomeTabSelectedError = '[Set HomeTabSelected] Set HomeTabSelected Error',
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
  props<{ ufficioSelezionato: IOffice|null }>()
);

export const SetUfficioSelezionatoSuccess = createAction(
  RubricaActionType.SetUfficioSelezionatoSuccess,
  //props<{rubrica: Array<IOffice>}>()
);

export const SetUfficioSelezionatoError = createAction(
  RubricaActionType.SetUfficioSelezionatoError
);

export const GetUfficioSelezionatoPrecedente = createAction(
  RubricaActionType.GetUfficioSelezionatoPrecedente,
  //props<{rubrica: Array<IOffice>}>()
);

export const GetUfficioSelezionatoSuccessPrecedente = createAction(
  RubricaActionType.GetUfficioSelezionatoPrecedenteSuccess,
  //props<{rubrica: Array<IOffice>}>()
);

export const GetUfficioSelezionatoErrorPrecedente = createAction(
  RubricaActionType.GetUfficioSelezionatoPrecedenteError
);

export const SetUfficioSelezionatoPrecedente = createAction(
  RubricaActionType.SetUfficioSelezionatoPrecedente,
  props<{ ufficioSelezionatoPrecedente: IOffice|null }>()
);

export const SetUfficioSelezionatoSuccessPrecedente = createAction(
  RubricaActionType.GetUfficioSelezionatoPrecedenteSuccess,
  //props<{rubrica: Array<IOffice>}>()
);

export const SetUfficioSelezionatoErrorPrecedente = createAction(
  RubricaActionType.SetUfficioSelezionatoPrecedenteError
);

export const GetHomeTabSelected = createAction(
  RubricaActionType.GetHomeTabSelected,
);

export const GetHomeTabSelectedSuccess = createAction(
  RubricaActionType.GetHomeTabSelectedSuccess,
);

export const GetHomeTabSelectedError = createAction(
  RubricaActionType.GetHomeTabSelectedError
);

export const SetHomeTabSelected = createAction(
  RubricaActionType.SetHomeTabSelected,
  props<{ homeTabSelected: string }>()
);

export const SetHomeTabSelectedSuccess = createAction(
  RubricaActionType.SetHomeTabSelectedSuccess,
  //props<{rubrica: Array<IOffice>}>()
);

export const SetHomeTabSelectedError = createAction(
  RubricaActionType.SetHomeTabSelectedError
);
