"use strict";
import { AnyAction } from "redux";
import * as actionType from "../constants/actionTypes";
import { Card } from "../models/Card";

type StatsState = {
  selected: Card,
  cards: Card[],
};

// type StatsAction = {
//   type: string,
//   payload: Card,
// };

const DEFAULT_CARD: Card = {
  idx: 0,
  speed: 0,
  total: 0,
  timeLeft: 0,
  date: {
    weekday: "n/a",
    day: "n/a",
    month: "n/a",
    year: "n/a",
  },
  weekdaysTotals: [0, 0, 0, 0, 0, 0, 0],
  goal: "Pomodoro Session",
  color: "#29304D",
  dates: [],
};

const DEFAULT: StatsState  = {
  selected: DEFAULT_CARD,
  cards: [DEFAULT_CARD],
};

const statsReducer = (state = DEFAULT, action: AnyAction) => {
  switch (action.type) {
    case actionType.ADD_CARD:
      return {
        ...state,
        cards: state.cards.concat(action.payload),
      };
    case actionType.DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((item) => {
          return item.idx !== action.payload.idx;
        }),
      };
    case actionType.SELECTED_CARD:
      return {
        ...state,
        selected: action.payload,
      };
    case actionType.FETCH_CARDS:
      // debugger;
      return {
        ...state,
        cards: action.payload
      };
    case actionType.CLEAR_CARDS:
      return state;
    default:
      return state;
  }
};

export default statsReducer;
