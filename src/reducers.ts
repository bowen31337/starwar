import { combineReducers } from "redux";
import { peopleReducer } from "./people";

export const rootReducer = combineReducers({ people: peopleReducer });


export type RootState = ReturnType<typeof rootReducer>
