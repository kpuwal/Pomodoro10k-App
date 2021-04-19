"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  cycle: true,
  start: false,
  pause: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    cycleCounter: (state, action: PayloadAction<boolean>) => {
      state.cycle = action.payload
    },
    startCounter: (state) => {
      state.start = !state.start
    },
    pauseCounter: (state, action: PayloadAction<boolean>) => {
      state.pause = action.payload
    },
  }
});

export const { cycleCounter, startCounter, pauseCounter } = counterSlice.actions;
export default counterSlice.reducer;
