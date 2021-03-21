import { TestScheduler } from "rxjs/testing";
import { ajax } from "rxjs/ajax";

import { fetchPeopleEpic, fetchPeople } from ".";
import { API_PEOPLE_PAGE_1, setPager } from "../pager";
import { Action } from "../types";
import { of, from } from "rxjs";
import { fetchPeopleSuccess } from "./action";
import { resetPeople } from "../detail";

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

let ajaxMock: any;

beforeAll(() => {
  ajaxMock = jest.spyOn(ajax, "getJSON");
});

describe("epics", () => {
  describe("fetchPeopleEpic", () => {
    describe("api success", () => {
      it("should dispatch success action, setPager action, resetPeople action", () => {
        ajaxMock.mockImplementation((arg: string) => {
          if (arg.includes("people")) {
            return of({
              previous: null,
              next: "http://swapi.dev/api/people/?page=2",
              results: [
                {
                  name: "Luke Skywalker",
                  height: "172",
                  mass: "77",
                  birth_year: "19BBY",
                  gender: "male",
                  films: ["http://swapi.dev/api/films/1/"],
                },
              ],
            });
          }

          if (arg.includes("films")) {
            return of({
              title: "A New Hope",
            });
          }
          return of({});
        });
        testScheduler.run(({ hot, cold, expectObservable }) => {
          const action$: any = hot("-a", {
            a: fetchPeople(API_PEOPLE_PAGE_1) as Action<string>,
          });
          const state$: any = of({});

          const output$ = fetchPeopleEpic(action$, state$, null);

          expectObservable(output$).toBe("-(abc)", {
            a: fetchPeopleSuccess([
              {
                name: "Luke Skywalker",
                height: "172",
                mass: "77",
                birthYear: "19BBY",
                gender: "male",
                filmNames: ["A New Hope"],
              },
            ]),
            b: setPager({
              prev: null,
              next: "http://swapi.dev/api/people/?page=2",
            }),
            c: resetPeople(),
          });
        });
      });
    });
  });
});
