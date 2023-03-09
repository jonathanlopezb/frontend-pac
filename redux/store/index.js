import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

/* Reducer */
import reducer, { exampleInitialState } from "../reducers";

const makeStore = (initialState = exampleInitialState) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

export default makeStore;
