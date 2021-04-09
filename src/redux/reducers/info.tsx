"use strict";
import { AnyAction } from "redux";
import {
  SESSION_MODE,
  SESSION_MESSAGE,
} from "../constants/actionTypes";

import { MODE, MESSAGE } from "../../config/constants";

export interface InfoProps {
  mode: string;
  message: string;
};

// type SessionAction = {
//   type: string;
//   payload: number;
// };

export const DEFAULT: InfoProps = {
  mode: MODE[0], 
  message: MESSAGE[0],
};

const infoReducer = (state = DEFAULT, action: AnyAction) => {
  switch (action.type) {
    case SESSION_MODE:
      const newMode = MODE[action.payload]!;
      return {
        ...state,
        mode: newMode,
      };
    case SESSION_MESSAGE:
      const newMessage = MESSAGE[action.payload]!;
      return {
        ...state,
        message: newMessage,
      };
    default:
      return state;
  }
};

export default infoReducer;
