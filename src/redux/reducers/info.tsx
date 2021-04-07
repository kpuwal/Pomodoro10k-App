"use strict";
import {
  SESSION_MODE,
  SESSION_MESSAGE,
} from "../constants/actionTypes";

type NonEmptyArray<T> = [T, ...T[]];

const MODE: NonEmptyArray<string> = ["FOCUS", "RELAX", " "];
const MESSAGE: NonEmptyArray<string> = ["End of Focus Session", "End of Cycle"];

export interface InfoProps {
  mode: string;
  message: string;
};

type SessionAction = {
  type: string;
  payload: number;
};

export const DEFAULT: InfoProps = {
  mode: MODE[0], 
  message: MESSAGE[0],
};

const infoReducer = (state = DEFAULT, action: SessionAction) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default infoReducer;
