"use strict";
import {
  SELECTED_SESSION,
  SESSION_MODE,
  SESSION_MESSAGE,
  SESSION_MIN,
  SESSION_SEC,
  SESSION_SAVE,
} from "../constants/actionTypes";

const MODE = ["FOCUS", "RELAX", " "];
const MESSAGE = ["End of Focus Session", "End of Cycle"];

export const DEFAULT = {
  session: {
    min: 25,
    sec: 0,
  },
  selected: {
    min: 25,
    sec: 0,
  },
  mode: MODE[0],
  message: MESSAGE[0],
};

const session = (state = DEFAULT, action) => {
  switch (action.type) {
    case SELECTED_SESSION:
      return {
        ...state,
        selected: action.select,
      };
    case SESSION_MODE:
      return {
        ...state,
        mode: MODE[action.idx],
      };
    case SESSION_MESSAGE:
      return {
        ...state,
        message: MESSAGE[action.idx],
      };
    case SESSION_MIN:
      return {
        ...state,
        session: action.countMin,
      };
    case SESSION_SEC:
      return {
        ...state,
        session: action.countSec,
      };
    case SESSION_SAVE:
      return state;
    default:
      return state;
  }
};

export default session;
