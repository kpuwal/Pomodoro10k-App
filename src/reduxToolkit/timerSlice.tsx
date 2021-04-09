"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Timer } from "../redux/models/Timer"

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    timersList: [
      { idx: 1, data: { focus: 45, relax: 15 } },
      { idx: 2, data: { focus: 25, relax: 5 } },
    ] as Timer[],
    selected: { idx: 1, data: { focus: 45, relax: 15 } } as Timer,
  },
  reducers: {
    fetchTimers: (state, action: PayloadAction<Timer[]>) => {
      state.timersList = [...state.timersList, ...action.payload]
    },
    addTimer: (state, action: PayloadAction<Timer>) => {
      state.timersList = state.timersList.concat(action.payload)
    },
    deleteTimer: (state, action: PayloadAction<Timer>) => {
      state.timersList = state.timersList.filter((item) => {
        return item.idx !== action.payload.idx;
      })
    },
    selectTimer: (state, action: PayloadAction<Timer>) => {
      state.selected = action.payload
    },
  };
});

export const { fetchTimers, addTimer, deleteTimer, selectTimer } = timerSlice.actions;
export default timerSlice.reducer;
