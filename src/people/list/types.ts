export enum ActionType {
  SELECT_PEOPLE = "startWar/people/selectPeople",
  FETCH_PEOPLE = 'startWare/people/fetchPeople',
  FETCH_PEOPLE_SUCCESS = 'startWare/people/fetchPeopleSuccess',
  FETCH_PEOPLE_FAILURE = 'startWare/people/fetchPeopleFailure',
}

export interface State {
    results: Array<PeoplePayload>
    error: string,
    loading: boolean
}

export interface PeoplePayload {
    name: string;
    height: string;
    mass: string;
    birthYear: string;
    gender: string;
    filmNames: Array<string>
}

