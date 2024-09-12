import { ActionReducerMap } from "@ngrx/store";

import { userReducer, UserState } from "../reducers/utente-reducer";
import { IAuthUserState } from "../states/authuser.state";
import { authUserReducer } from "../reducers/authuser.reducer";

export interface AppState {
  userState: UserState,
  authUser: IAuthUserState
}

export const appState: ActionReducerMap<AppState> = {
  userState: userReducer,
  authUser: authUserReducer
}

