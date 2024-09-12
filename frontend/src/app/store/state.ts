import { ActionReducerMap } from "@ngrx/store";

//import { contatoreReducer, ContatoreState } from "./contatore-reducer";
import { userReducer, UserState } from "./reducers/utente-reducer";

export interface AppState {
  //contatoreState: ContatoreState,
  userState: UserState
}

export const appState: ActionReducerMap<AppState> = {
  //contatoreState: contatoreReducer,
  userState: userReducer
}
