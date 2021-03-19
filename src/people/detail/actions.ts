import { PeoplePayload } from "../list";
import { ActionType } from "./types";

export const selectPeople = (selectedPeople: Partial<PeoplePayload>) => (
    {
        type: ActionType.SELECT_PEOPLE,
        payload: selectedPeople
    }
)

export const resetPeople = () => (
    {
        type: ActionType.RESET_PEOPLE,
    }
)