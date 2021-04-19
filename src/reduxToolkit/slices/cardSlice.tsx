"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, CardProps } from "../models";
import { updateSelectedCard } from "../helper";

const DEFAULT_CARD: CardProps = {
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

const initialState = {
  cardsList: [DEFAULT_CARD] as CardProps[],
  selected: DEFAULT_CARD as CardProps,
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
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
      state.cardsList = updateSelectedCard(state.cardsList , state.selected.idx, action.payload, new Date());
    },
    clearCardsAS: () => initialState
  }
});

export const { createCard, deleteCard, selectCard, updateCard, clearCardsAS } = cardSlice.actions;
export default cardSlice.reducer;
