"use strict";
import {
  SELECTED_SESSION,
  SESSION_MIN,
  SESSION_SEC,
  SESSION_SAVE,
} from "../constants/actionTypes";

export interface SessionProps {
  min: number;
  sec: number;
};

export type SessionState = {
  session: SessionProps;
  selected: SessionProps;
};

type SessionAction = {
  type: string;
  payload: SessionProps;
};

export const DEFAULT: SessionState = {
  session: {
    min: 45,
    sec: 0,
  },
  selected: {
    min: 45,
    sec: 0,
  },
};

const sessionReducer = (state = DEFAULT, action: SessionAction) => {
  switch (action.type) {
    case SELECTED_SESSION:
      return {
        ...state,
        selected: action.payload,
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
