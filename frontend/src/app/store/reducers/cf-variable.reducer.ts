import { createReducer, on } from '@ngrx/store';
import { setCfVariable } from '../actions/cf-variable.action';

export const initialState: string = '';

const _cfVariableReducer = createReducer(
  initialState,
  on(setCfVariable, (state, { value }) => value),
);

export function cfVariableReducer(state: any, action: any) {
  return _cfVariableReducer(state, action);
}