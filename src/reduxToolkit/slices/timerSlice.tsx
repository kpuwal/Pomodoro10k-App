"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Timer, TimerProps, DataProps } from "../models";

const timer45 = {
  idx: 1,
  focus: { min: 45, sec: 0 },
  relax: { min: 15, sec: 0 },
};

const timer25 = {
  idx: 2,
  focus: { min: 25, sec: 0 },
  relax: { min: 5, sec: 0 },
};

const initialState = {
  timersList: [ timer45, timer25 ],
  selected: timer45,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    createTimer: (state, action: PayloadAction<DataProps>) => {
      const timer = Timer(action.payload);
      state.timersList.push(timer);
    },
    deleteTimer: (state, action: PayloadAction<TimerProps>) => {
      state.timersList = state.timersList.filter((item) => {
        return item.idx !== action.payload.idx;
      })
    },
    selectTimer: (state, action: PayloadAction<TimerProps>) => {
      state.selected = action.payload;
    },
    clearTimersAS: () => initialState
  }
});

export const { createTimer, deleteTimer, selectTimer, clearTimersAS } = timerSlice.actions;
export default timerSlice.reducer;
