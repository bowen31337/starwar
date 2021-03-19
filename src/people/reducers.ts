import { combineReducers } from "redux";
import { listReducer } from "./list";
import { detailReducer } from "./detail";
import { pageReducer } from "./pager";

export const peopleReducer = combineReducers({
  list: listReducer,
  selectedPeople: detailReducer,
  pager: pageReducer,
});
