import { ActionReducerMap } from "@ngrx/store";

import { userReducer, UserState } from "../reducers/utente-reducer";
import { IAuthUserState } from "../states/authuser.state";
import { authUserReducer } from "../reducers/authuser.reducer";
import { IRubricaState } from "./rubrica.state";
import { rubricaReducer } from "../reducers/rubrica.reducer";

export interface AppState {
  userState: UserState,
  authUser: IAuthUserState,
  rubrica: IRubricaState
}

export const appState: ActionReducerMap<AppState> = {
  userState: userReducer,
  authUser: authUserReducer,
  rubrica: rubricaReducer
}

