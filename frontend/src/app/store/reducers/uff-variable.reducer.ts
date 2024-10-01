import { createReducer, on } from '@ngrx/store';
import { setUffVariable } from '../actions/uff-variable.action';

export const initialState: string = '';

const _uffVariableReducer = createReducer(
  initialState,
  on(setUffVariable, (state, { value }) => value),
);

export function uffVariableReducer(state: any, action: any) {
  return _uffVariableReducer(state, action);
}