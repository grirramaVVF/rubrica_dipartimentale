import { HttpClient } from "@angular/common/http";
import { RubricaService } from "../../services/rubrica.service";
import { RubricaActionType } from "../actions/rubrica.action";
import { inizializeRubricaState, IRubricaState } from "../states/rubrica.state";


export function rubricaReducer(
  rubricaState: IRubricaState = inizializeRubricaState,
  action: any
) {
  let temp: IRubricaState;
  switch (action.type) {
    case RubricaActionType.GetHomeRubricaSuccess:
      temp = { ...rubricaState };
      temp['rubrica'] = action.rubrica;
      return temp;

    default:
      return rubricaState
  }
}

