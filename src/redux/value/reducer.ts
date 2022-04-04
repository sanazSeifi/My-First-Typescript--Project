import { REDUX_ACTIONS } from "../actions.enum";
import { ReduxStore } from "../redux.model";

export function valueReducer(
  prevState: ReduxStore["value"],
  action: { type: REDUX_ACTIONS; payload: string }
): ReduxStore["value"] {
  switch (action.type) {
    case REDUX_ACTIONS.RESET_VALUE:
      return action.payload;
    case REDUX_ACTIONS.CHANGE_VALUE:
      return action.payload;
    default:
      return "";
  }
}
