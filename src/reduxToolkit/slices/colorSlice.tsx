"use strict";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StyleGuide, { ThemeProps } from "../../config/StyleGuide";

export interface ColorProps {
  idx: number;
  theme: ThemeProps;
  active: boolean;
};

export const initialState = {
  colorsList: [
    { idx: 1, theme: StyleGuide.themeB, active: true },
    { idx: 2, theme: StyleGuide.themeC, active: true },
    { idx: 3, theme: StyleGuide.themeD, active: true },
    { idx: 4, theme: StyleGuide.themeE, active: true },
  ] as ColorProps[],
  selected: {} as ColorProps,
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    pickColor: (state, action: PayloadAction<number>) => {
      state.colorsList.map(item => {
        item.idx === action.payload
          ? item.active = !item.active
          : item.active
      })
    },
    clearColorsAS: () => initialState
  }
});

export const { pickColor, clearColorsAS } = colorSlice.actions;
export default colorSlice.reducer;
