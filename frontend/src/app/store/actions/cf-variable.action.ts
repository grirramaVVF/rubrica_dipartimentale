import { createAction, props } from '@ngrx/store';

export const setCfVariable = createAction('[Cf Variable] Set', props<{ value: string }>());
