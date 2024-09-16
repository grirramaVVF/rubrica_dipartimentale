import { createAction, props } from "@ngrx/store";
import { IOffice } from "../../models/IOffice";

export enum RubricaActionType {
  GetHomeRubrica = '[Get Home Rubrica] Get Home Rubrica',
  GetHomeRubricaSuccess = '[Get Home Rubrica] Get Home Rubrica Success',
  GetHomeRubricaError = '[Get Home Rubrica] Get Home Rubrica Error',
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
