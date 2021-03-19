import { ActionType, PeoplePayload } from "./types";

export const fetchPeople = (url: string) => ({
  type: ActionType.FETCH_PEOPLE,
  payload: url,
});

export const fetchPeopleSuccess = (payload: Array<PeoplePayload>) => ({
  type: ActionType.FETCH_PEOPLE_SUCCESS,
  payload,
});

export const fetchPeopleFailure = (error: Error) => ({
  type: ActionType.FETCH_PEOPLE_FAILURE,
  payload: error.message,
});
