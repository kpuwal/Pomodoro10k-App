"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MODE, MESSAGE } from "../config/constants";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    mode: MODE[0], 
    message: MESSAGE[0],
  },
  reducers: {
    sessionMode: (state, action: PayloadAction<number>) => {
      state.mode = MODE[action.payload]!
    },
    sessionMessage: (state, action: PayloadAction<number>) => {
      state.message = MESSAGE[action.payload]!
    }
  }
});

export const { sessionMode, sessionMessage } = infoSlice.actions;
export default infoSlice.reducer;
