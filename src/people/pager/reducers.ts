import { Action } from "../types";
import { ActionType, PagerPayload } from "./types";

const API_PEOPLE_PAGE_1 = "http://swapi.dev/api/people/?page=1";

const initState: PagerPayload = {
  next: API_PEOPLE_PAGE_1,
  prev: null,
};

export const pageReducer = (state: PagerPayload = initState, action:Action<PagerPayload>) => {
  switch (action.type) {
    case ActionType.SET_PAGER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
        return state;
  }
};
