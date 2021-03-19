import { PeoplePayload } from "../list";
import { Action } from "../types";
import { ActionType } from "./types";

const initState: Partial<PeoplePayload> = {
  name: "",
  birthYear: "",
  gender: "",
  filmNames: [],
};

export const detailReducer = (
  state: Partial<PeoplePayload> = initState,
  action: Action<Partial<PeoplePayload>>
) => {
  switch (action.type) {
    case ActionType.SELECT_PEOPLE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case ActionType.RESET_PEOPLE: {
      return initState;
    }
    default:
      return state;
  }
};
