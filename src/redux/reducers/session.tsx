"use strict";
import {
  SELECTED_SESSION,
  SESSION_MODE,
  SESSION_MESSAGE,
  SESSION_MIN,
  SESSION_SEC,
  SESSION_SAVE,
} from "../constants/actionTypes";

const MODE: string[] = ["FOCUS", "RELAX", " "];
const MESSAGE: string[] = ["End of Focus Session", "End of Cycle"];

export interface SessionProps {
  min: number;
  sec: number;
};

export type SessionState = {
  session: SessionProps;
  selected: SessionProps;
  mode: string;
  message: string;
};

type SessionAction = {
  type: string;
  payload: SessionProps;
};

export const DEFAULT: SessionState = {
  session: {
    min: 25,
    sec: 0,
  },
  selected: {
    min: 25,
    sec: 0,
  },
  // mode and message will never return undefined or null
  mode: MODE[0]!, 
  message: MESSAGE[0]!,
};

const sessionReducer = (state = DEFAULT, action: SessionAction) => {
  switch (action.type) {
    case SELECTED_SESSION:
      return {
        ...state,
        selected: action.payload,
      };
    case SESSION_MODE:
      return {
        ...state,
        mode: MODE[action.payload],
      };
    case SESSION_MESSAGE:
      return {
        ...state,
        message: MESSAGE[action.payload],
      };
    case SESSION_MIN:
      return {
        ...state,
        session: action.payload,
      };
    case SESSION_SEC:
      return {
        ...state,
        session: action.payload,
      };
    case SESSION_SAVE:
    default:
      return state;
  }
};

export default sessionReducer;
