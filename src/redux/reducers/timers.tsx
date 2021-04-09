"use strict";
import { AnyAction } from "redux";
import * as actionTypes from "../constants/actionTypes";
import { Timer } from "../models/Timer";

export type TimerState = {
  timersList: Timer[],
  selected: Timer,
};

// type TimerAction = {
//   type: string,
//   payload: Timer
// };

// export type DispatchType = (payload: TimerAction) => TimerAction;

const DEFAULT: TimerState = {
  timersList: [
    { idx: 1, data: { focus: 45, relax: 15 } },
    { idx: 2, data: { focus: 25, relax: 5 } },
  ],
  selected: { idx: 1, data: { focus: 45, relax: 15 } },
};

const timersReducer = (state = DEFAULT, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.SELECTED_TIMER:
      return {
        ...state,
        selected: action.payload,
      };
    case actionTypes.ADD_TIMER:
      return {
        ...state,
        timersList: state.timersList.concat(action.payload),
      };
    case actionTypes.DELETE_TIMER:
      return {
        ...state,
        timersList: state.timersList.filter((item) => {
          return item.idx !== action.payload.idx;
        }),
      };
    case actionTypes.FETCH_TIMERS:
      return {
        ...state,
        // check if the action needs to be spreaded
        timersList: [...state.timersList, ...action.payload],
      };
    case actionTypes.CLEAR_TIMERS:
      return state;
    default:
      return state;
  }
};

export default timersReducer;
