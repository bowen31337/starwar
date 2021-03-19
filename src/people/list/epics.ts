import { combineEpics, Epic, ofType } from "redux-observable";
import { catchError, map, mergeMap, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { combineLatest, merge, of } from "rxjs";

import { ajax } from "rxjs/ajax";
import { ActionType, PeoplePayload } from "./types";
import { fetchPeopleFailure, fetchPeopleSuccess } from "./action";
import { mapPeoplePayload } from "./utils";
import { setPager } from "../pager";

export const fetchPeopleEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(ActionType.FETCH_PEOPLE),
    withLatestFrom(state$),
    switchMap(([_, state]) => {
      const { next } = state.people.pager;
      return ajax.getJSON(next).pipe(
        mergeMap((data: any) =>
          combineLatest(
            data.results.map((result: any) =>
              combineLatest(
                result.films.map((film: string) =>
                  ajax.getJSON(film).pipe(map((film: any) => film.title))
                )
              ).pipe(map((titles: any) => ({ ...result, filmNames: titles })))
            )
          ).pipe(
            map((results: any) => ({
              next: data.next ? data.next : null,
              prev: data.previous ? data.previous : null,
              results,
            }))
          )
        ),
        switchMap((data) => {
          const successPayload = data.results.map(mapPeoplePayload);
          const { next, prev } = data;
          return [fetchPeopleSuccess(successPayload), setPager({ next, prev })];
        }),
        catchError(error => of(fetchPeopleFailure(error.message)))
      );
    })
  );
