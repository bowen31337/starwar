import { Epic, ofType } from "redux-observable";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { combineLatest, of } from "rxjs";

import { ajax } from "rxjs/ajax";
import { ActionType } from "./types";
import { fetchPeopleFailure, fetchPeopleSuccess } from "./action";
import { mapPeoplePayload } from "./utils";
import { setPager } from "../pager";
import { resetPeople } from "../detail";

export const fetchPeopleEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionType.FETCH_PEOPLE),
    map((action) => action.payload),
    switchMap((payload) => {
      return ajax.getJSON(payload).pipe(
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
          return of(
            fetchPeopleSuccess(successPayload),
            setPager({ next, prev }),
            resetPeople()
          );
        }),
        catchError((error) => of(fetchPeopleFailure(error)))
      );
    })
  );
