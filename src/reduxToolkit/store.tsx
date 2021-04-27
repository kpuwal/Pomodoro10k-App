import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
  
import { combineReducers } from "redux";
import { useDispatch } from "react-redux";

import infoReducer from "./slices/infoSlice";
import counterReducer from "./slices/counterSlice";
import timerReducer from "./slices/timerSlice";
import cardReducer from "./slices/cardSlice";
import colorReducer from "./slices/colorSlice";

const reducer = combineReducers({
  info: infoReducer,
  counter: counterReducer,
  timer: timerReducer,
  card: cardReducer,
  color: colorReducer,
});

const persistConfig = {
  key: "DATA",
  storage: AsyncStorage,
  whitelist: ["timer", "card"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
    immutableCheck: false,
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
