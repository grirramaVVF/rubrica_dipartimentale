import { HttpClient } from "@angular/common/http";
import { RubricaService } from "../../services/rubrica.service";
import { RubricaActionType } from "../actions/rubrica.action";
import { inizializeRubricaState, IRubricaState } from "../states/rubrica.state";


export function rubricaReducer(
  rubricaState: IRubricaState = inizializeRubricaState,
  action: any
) {
  let temp: IRubricaState;
  temp = { ...rubricaState };

  switch (action.type) {
    case RubricaActionType.GetHomeRubricaSuccess:
      temp['rubrica'] = action.rubrica;
      temp['ufficioSelezionato'] = action.rubrica[0]|| [];
      return temp;
    case RubricaActionType.SetUfficioSelezionato:
      temp['ufficioSelezionato'] = action.ufficioSelezionato;
      return temp;
    //case RubricaActionType.GetPersonale:

    default:
      return rubricaState
  }
}

