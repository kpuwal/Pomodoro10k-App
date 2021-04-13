"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, CardProps } from "../redux/models/Card";
import { updateSelectedCard } from "./helper";

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
    cardsList: [DEFAULT_CARD] as CardProps[],
    selected: DEFAULT_CARD as CardProps,
  },
  reducers: {
    fetchCards: (state, action: PayloadAction<CardProps[]>) => {
      state.cardsList = action.payload
    },
    createCard: (state, action: PayloadAction<{color: string, title: string}>) => {
      const card = Card(action.payload.color, action.payload.title);
      state.cardsList.push(card)
    },
    deleteCard: (state, action: PayloadAction<CardProps>) => {
      state.cardsList = state.cardsList.filter((item) => {
        return item.idx !== action.payload.idx;
      })
    },
    selectCard: (state, action: PayloadAction<CardProps>) => {
      state.selected = action.payload
    },
    updateCard: (state, action: PayloadAction<number>) => {
      state.cardsList = updateSelectedCard(state.cardsList , state.selected.idx, action.payload);
    },
  }
});

export const { fetchCards, createCard, deleteCard, selectCard, updateCard } = cardSlice.actions;
export default cardSlice.reducer;
