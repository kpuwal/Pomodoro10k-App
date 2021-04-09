"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    cycle: true,
    start: false,
    pause: false,
  },
  reducers: {
    cycleCounter: (state, action: PayloadAction<boolean>) => {
      state.cycle = action.payload
    },
    startCounter: (state, action: PayloadAction<boolean>) => {
      state.start = !action.payload
    },
    pauseCounter: (state, action: PayloadAction<boolean>) => {
      state.start = action.payload
    },
  }
});

export const { cycleCounter, startCounter, pauseCounter } = counterSlice.actions;
export default counterSlice.reducer;
