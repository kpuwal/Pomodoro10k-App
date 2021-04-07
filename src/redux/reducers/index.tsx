"use strict";
import { combineReducers } from "redux";

import { CLEAR_TIMERS, CLEAR_CARDS } from "../constants/actionTypes";

import counterReducer from "./counter";
import sessionReducer from "./session";
import timersReducer from "./timers";
import statsReducer from "./stats";
import infoReducer from "./info";

const allReducers = combineReducers({
  counter: counterReducer,
  session: sessionReducer,
  timers: timersReducer,
  stats: statsReducer,
  info: infoReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_TIMERS) {
    state = undefined;
  }
  if (action.type === CLEAR_CARDS) {
    state = undefined;
  }
  return allReducers(state, action);
};

export default rootReducer;
