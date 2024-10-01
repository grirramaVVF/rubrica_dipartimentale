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
            temp['ufficioSelezionato'] = null; //action.rubrica[0]|| [];
            return temp;
        case RubricaActionType.SetUfficioSelezionato:
            // temp['ufficioSelezionatoPrecedente'] = temp['ufficioSelezionato']; //action.ufficioSelezionatoPrecedente;
            temp['ufficioSelezionato'] = action.ufficioSelezionato;
            return temp;
        case RubricaActionType.SetUfficioSelezionatoPrecedente:
            temp['ufficioSelezionatoPrecedente'] = action.ufficioSelezionatoPrecedente;
            return temp;
        case RubricaActionType.SetHomeTabSelected:
            temp['homeTabSelected'] = action.homeTabSelected;
            return temp;
        default:
            return rubricaState
    }
}
