"use strict";
import {
  START_COUNTER,
  PAUSE_COUNTER,
  CYCLE_COUNTER,
} from "../constants/actionTypes";

interface CounterProps {
  cycle: boolean;
  start: boolean;
  pause: boolean;
}

type CounterAction = {
  type: string;
  payload: boolean;
}

const DEFAULT: CounterProps = {
  cycle: true,
  start: false,
  pause: false,
};

const counterReducer = (state = DEFAULT, action: CounterAction) => {
  switch (action.type) {
    case CYCLE_COUNTER:
      return {
        ...state,
        cycle: action.payload,
      };
    case START_COUNTER:
      return {
        ...state,
        start: !state.start,
      };
    case PAUSE_COUNTER:
      return {
        ...state,
        pause: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
