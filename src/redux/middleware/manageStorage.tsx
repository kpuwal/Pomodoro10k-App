"use strict";

import * as actionType from "../constants/actionTypes";
import { updateDataStorage, removeItemFromStorage } from "../../storage/storage";

import { Timer } from "../models/Timer";
import { Card }from "../models/Card";

const TIMERS_KEY: string = "@TIMERS";
const CARDS_KEY: string = "@CARDS";

const manageStorage = (store) => (next) => (action) => {
  const cardsList = store.getState().stats.cards;
  const timers = store.getState().timers.timersList;

  if (action.type === actionType.CREATE_TIMER) {
    const timer = new Timer(action.payload);
    updateDataStorage(TIMERS_KEY, { items: [...timers.slice(2), timer] });
    store.dispatch({ type: actionType.ADD_TIMER, payload: timer });
  }

  if (action.type === actionType.DELETE_TIMER) {
    removeItemFromStorage(TIMERS_KEY, action.payload.idx);
  }

  if (action.type === actionType.CREATE_CARD) {
    const card = new Card(action.payload);
    updateDataStorage(CARDS_KEY, { items: [...cardsList, card] });
    return store.dispatch({ type: actionType.ADD_CARD, payload: card });
  }

  if (action.type === actionType.DELETE_CARD) {
    removeItemFromStorage(CARDS_KEY, action.payload.idx);
  }
  return next(action);
};

export default manageStorage;
