"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, CardProps } from "../models";
import { updateSelectedCard } from "../helper";
import StyleGuide from "../../config/StyleGuide";
import { ColorProps } from "../../reduxToolkit/slices/colorSlice";

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
  theme: StyleGuide.themeA,
  dates: [],
  goalHours: 10000,
};

export const initialState = {
  cardsList: [DEFAULT_CARD] as CardProps[],
  selected: DEFAULT_CARD as CardProps,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    createCard: (state, action: PayloadAction<{amount: number, theme: ColorProps, title: string}>) => {
      console.log("theme from redux ", action.payload.theme.theme)
      const card = Card(
        action.payload.amount,
        action.payload.theme.theme,
        action.payload.title
      );
      state.cardsList.push(card)
    },
    deleteCard: (state, action: PayloadAction<CardProps>) => {
      state.cardsList = state.cardsList.filter((item) => {
        return item.idx !== action.payload.idx;
      });
      state.selected = initialState.selected;
    },
    selectCard: (state, action: PayloadAction<CardProps>) => {
      state.selected = action.payload
    },
    updateCard: (state, action: PayloadAction<{min: number, date: Date}>) => {
      state.cardsList = updateSelectedCard(
        state.cardsList , state.selected.idx, action.payload.min, action.payload.date
      );
    },
    clearCardsAS: () => initialState
  }
});

export const { createCard, deleteCard, selectCard, updateCard, clearCardsAS } = cardSlice.actions;
export default cardSlice.reducer;
