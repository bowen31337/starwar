import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootEpic } from "./epics";
import { rootReducer } from "./reducers";

const epicMiddleware = createEpicMiddleware();


export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic as any);

  return store;
}
