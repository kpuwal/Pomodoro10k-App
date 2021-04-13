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
    selectSession: (state, action: PayloadAction<number>) => {
      state.selected = { min: action.payload, sec: 0 }
    },
    minutes: (state, action: PayloadAction<number>) => {
      state.session = {min: action.payload - 1, sec: 59}
    },
    seconds: (state, action: PayloadAction<Session>) => {
      state.session.sec = action.payload.sec - 1}
    },
  }
)

export const { selectSession, minutes, seconds } = sessionSlice.actions;
export default sessionSlice.reducer;
