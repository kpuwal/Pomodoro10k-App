"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorProps {
  idx: number;
  color: string;
  avaliable: boolean;
};

export const initialState = {
  colorsList: [
    { idx: 0, color: "#FE5E33", avaliable: true },
    { idx: 1, color: "#FFC641", avaliable: true },
    { idx: 2, color: "#BFEAF5", avaliable: true },
    { idx: 3, color: "#442CB9", avaliable: true },
  ] as ColorProps[],
  selected: {} as ColorProps,
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    pickColor: (state, action: PayloadAction<ColorProps>) => {
      state.colorsList.map(item => {
        item.idx === action.payload.idx 
          ? item.avaliable = !item.avaliable
          : item.avaliable
      })
    },
  }
});

export const { pickColor } = colorSlice.actions;
export default colorSlice.reducer;
