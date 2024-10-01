import { createAction, props } from '@ngrx/store';

export const setUffVariable = createAction('[Uff Variable] Set', props<{ value: string }>());
