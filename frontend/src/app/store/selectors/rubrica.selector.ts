import { createSelector } from '@ngrx/store';
import { IOffice } from '../../models/IOffice';

// creo selettore
const selectRubricaState = (state: any) => state.rubrica;

export const selectHome = createSelector(
  selectRubricaState,
  // (state:Array<IOffice>) => state
  (state:any) => state
);
