"use strict";
import {
  START_COUNTER,
  PAUSE_COUNTER,
  CYCLE_COUNTER,
} from "../constants/actionTypes";

const DEFAULT = {
  cycle: true,
  start: false,
  pause: false,
};

const counterReducer = (state = DEFAULT, action) => {
  switch (action.type) {
    case CYCLE_COUNTER:
      return {
        ...state,
        cycle: action.cycle,
      };
    case START_COUNTER:
      return {
        ...state,
        start: !state.start,
      };
    case PAUSE_COUNTER:
      return {
        ...state,
        pause: action.pause,
      };
    default:
      return state;
  }
};

export default counterReducer;
