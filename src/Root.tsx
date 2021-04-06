"use strict";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";

// TO BE REMOVED
import { composeWithDevTools } from 'redux-devtools-extension';

import multiactionArray from "./redux/middleware/multiactionArray";
import manageStorage from "./redux/middleware/manageStorage";
import saveSession from "./redux/middleware/saveSession";
import { fetchData } from "./redux/actions";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, multiactionArray, manageStorage, saveSession))
);

// TO FIX type of Root
const Root = ({ children }) => {
  store.dispatch(fetchData());
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default Root;
