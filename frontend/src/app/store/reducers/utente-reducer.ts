import { createSelector } from "@ngrx/store";
import { IUser } from "../../models/IUser";

export interface UserState {
  user: Array<IUser>;
}

const inizializzazione: UserState = {
  user: [
    { nome: 'Lamberto' },
    { nome: 'Angela' }
  ]
}

export function userReducer(
  userState: UserState = inizializzazione,
  action: any
) {
  switch (action.type) {
    case "AGGIUNGI":
      let nuovo: UserState = {
        user: [...userState.user]
      }
      nuovo.user.push(action.user);
      return nuovo;
    default:
      return userState;
  }
}

// creo selettore
const selectUserState = (state: any) => state.userState;

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);
