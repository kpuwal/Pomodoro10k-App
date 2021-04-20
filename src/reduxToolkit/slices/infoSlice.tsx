"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MODE, MESSAGE } from "../../config/constants";

export const initialState = {
  mode: MODE[0], 
  message: MESSAGE[0],
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    mode: (state, action: PayloadAction<number>) => {
      state.mode = MODE[action.payload]!
    },
    message: (state, action: PayloadAction<number>) => {
      state.message = MESSAGE[action.payload]!
    }
  }
});

export const { mode, message } = infoSlice.actions;
export default infoSlice.reducer;
