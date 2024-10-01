import { createSelector } from '@ngrx/store';

// const selectRubricaState = (state: any) => state.rubrica;
const selectRubricaState = (state: any) => state.rubrica;

export const selectHome = createSelector(
    selectRubricaState,
    // (state:Array<IOffice>) => state
    (state: any) => state
);

export const selectUfficioSelezionato = createSelector(
    selectRubricaState,
    // (state:Array<IOffice>) => state
    (state: any) => state.ufficioSelezionato
);

export const selectElencoUfficiSelezionati = createSelector(
    selectRubricaState,
    (state: any) => state.elencoUfficiSelezionati
);

export const selectUfficioSelezionatoPrecedente = createSelector(
    selectRubricaState,
    // (state:Array<IOffice>) => state
    (state: any) => state.ufficioSelezionatoPrecedente
);

export const selectPersonale = createSelector(
    selectRubricaState,
    (state: any) => state.ufficioSelezionato.personale
)

export const selectHomeTabSelected = createSelector(
    selectRubricaState,
    (state: any) => state.homeTabSelected
);
