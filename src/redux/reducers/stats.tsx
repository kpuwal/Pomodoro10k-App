"use strict";

import {
  FETCH_CARDS,
  ADD_CARD,
  DELETE_CARD,
  SELECTED_CARD,
  CLEAR_CARDS,
} from "../constants/actionTypes";

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

const DEFAULT = {
  selected: DEFAULT_CARD,
  cards: [DEFAULT_CARD],
};

const stats = (state = DEFAULT, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: state.cards.concat(action.payload),
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((item) => {
          return item.idx !== action.payload;
        }),
      };
    case SELECTED_CARD:
      return {
        ...state,
        selected: action.payload,
      };
    case FETCH_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case CLEAR_CARDS:
      return state;
    default:
      return state;
  }
};

export default stats;
