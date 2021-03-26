"use strict";
import { combineReducers } from "redux";

import { CLEAR_TIMERS, CLEAR_CARDS } from "../constants/actionTypes";

import counter from "./counter";
import session from "./session";
import timers from "./timers";
import stats from "./stats";

const allReducers = combineReducers({
  counter,
  session,
  timers,
  stats,
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
