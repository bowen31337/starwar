import { ActionType, PagerPayload } from "./types";

export const setPager = (payload: PagerPayload) => ({
  type: ActionType.SET_PAGER,
  payload,
});
