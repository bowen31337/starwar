import { PeoplePayload } from "./types";

export const mapPeoplePayload  = (result: any) : PeoplePayload=> {
  const {
    name,
    height,
    mass,
    birth_year: birthYear,
    gender,
    filmNames,
  } = result;
  return { name, height, mass, birthYear, gender, filmNames };
};
