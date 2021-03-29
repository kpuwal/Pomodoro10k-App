"use strict";
import * as actionType from "../constants/actionTypes";

interface IStats {
  idx: number,
  speed: number,
  total: number,
  timeLeft: number,
  date: {
    weekday: string,
    day: string,
    month: string,
    year: string,
  }
  weekdaysTotals: number[],
  goal: string,
  color: string,
  dates: string[],
};

type StatsState = {
  selected: IStats,
  cards: IStats[],
};

type StatsAction = {
  type: string,
  payload: IStats,
};

const DEFAULT_CARD = {
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

const DEFAULT: StatsState = {
  selected: DEFAULT_CARD,
  cards: [DEFAULT_CARD],
};

const statsReducer = (state = DEFAULT, action: StatsAction) => {
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
      return {
        ...state,
        cards: action.payload,
      };
    case actionType.CLEAR_CARDS:
      return state;
    default:
      return state;
  }
};

export default statsReducer;
