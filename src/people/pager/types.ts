export enum ActionType {
    SET_PAGER = 'startWare/people/setPager',
}


export interface PagerPayload {
    next: string | null;
    prev: string | null;
}
