import { createSelector } from '@ngrx/store';
import { IOffice } from '../../models/IOffice';

// creo selettore
const selectRubricaState = (state: any) => state.rubrica;

export const selectHome = createSelector(
  selectRubricaState,
  // (state:Array<IOffice>) => state
  (state:any) => state
);

export const selectUfficioSelezionato = createSelector(
  selectRubricaState,
  // (state:Array<IOffice>) => state
  (state:any) => state.ufficioSelezionato
);

export const selectUfficioSelezionatoPrecedente = createSelector(
  selectRubricaState,
  // (state:Array<IOffice>) => state
  (state:any) => state.ufficioSelezionatoPrecedente
);

export const selectPersonale=createSelector(
  selectRubricaState,
  (state:any) => state.ufficioSelezionato.personale
)
