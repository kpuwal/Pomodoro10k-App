"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Session = {
  min: number,
  sec: number,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    session: {
      min: 45,
      sec: 0,
    } as Session,
    selected: {
      min: 45,
      sec: 0,
    } as Session,
  },
  reducers: {
    saveSession: (state) => {
      state.session = {min: 45, sec: 0};
      state.selected = {min: 45, sec: 0};
    },
    selectedSession: (state, action: PayloadAction<Session>) => {
      state.selected = action.payload
    },
    minutes: (state, action: PayloadAction<Session>) => {
      state.session = action.payload
    },
    seconds: (state, action: PayloadAction<Session>) => {
      state.session = action.payload
    },
  }
});

export const { saveSession, selectedSession, minutes, seconds } = sessionSlice.actions;
export default sessionSlice.reducer;
