import { ActionType, State } from "./types";
import { Action } from '../types'

const initState: State = {
  results: [],
  error:'',
  loading: false,
};

export const listReducer = (
  state: State = initState,
  action: Action<any>
): State => {
  switch (action.type) {
    case ActionType.FETCH_PEOPLE: {
        return {
            ...state,
            loading:true,
        }
    }
    case ActionType.FETCH_PEOPLE_SUCCESS: {
      return {
        ...state,
        results: action.payload,
        loading:false,
      };
    }
    case ActionType.FETCH_PEOPLE_FAILURE: {
        return {
          ...state,
          results: [],
          loading:false,
          error: action.payload
        };
      }
    default:
      return state;
  }
};
