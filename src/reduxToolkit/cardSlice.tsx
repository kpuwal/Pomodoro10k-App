"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../redux/models/Card";

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

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardsList: [DEFAULT_CARD] as Card[],
    selected: DEFAULT_CARD as Card,
  },
  reducers: {
    fetchCards: (state, action: PayloadAction<Card[]>) => {
      state.cardsList = action.payload
    },
    addCard: (state, action: PayloadAction<Card>) => {
      state.cardsList = state.cardsList.concat(action.payload)
    },
    deleteCard: (state, action: PayloadAction<Card>) => {
      state.cardsList = state.cardsList.filter((item) => {
        return item.idx !== action.payload.idx;
      })
    },
    selectCard: (state, action: PayloadAction<Card>) => {
      state.selected = action.payload
    },
  };
});

export const { fetchCards, addCard, deleteCard, selectCard } = cardSlice.actions;
export default cardSlice.reducer;
