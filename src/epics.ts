import { combineEpics } from "redux-observable";
import { fetchPeopleEpic } from "./people/list";

export const rootEpic = combineEpics(
    fetchPeopleEpic
);
