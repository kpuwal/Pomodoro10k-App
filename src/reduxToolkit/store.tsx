import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import infoReducer from "./infoSlice";
import counterReducer from "./counterSlice";
import sessionReducer from "./sessionSlice";
import timerReducer from "./timerSlice";
import cardReducer from "./cardSlice";

export const store = configureStore({
  reducer: {
    info: infoReducer,
    counter: counterReducer,
    session: sessionReducer,
    timer: timerReducer,
    card: cardReducer,
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
