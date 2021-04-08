"use strict";

import * as actionTypes from "../constants/actionTypes";

export interface TimerProps {
  idx: number,
  data: {
    focus: number,
    relax: number,
  }
};

export type TimerState = {
  timersList: TimerProps[],
  selected: TimerProps,
};

type TimerAction = {
  type: string,
  payload: TimerProps
};

export type DispatchType = (payload: TimerAction) => TimerAction;

const DEFAULT: TimerState = {
  timersList: [
    { idx: 1, data: { focus: 45, relax: 15 } },
    { idx: 2, data: { focus: 25, relax: 5 } },
  ],
  selected: { idx: 1, data: { focus: 45, relax: 15 } },
};

const timersReducer = (state = DEFAULT, action: TimerAction) => {
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
