"use strict";
import { CREATE_CARD, ADD_CARD } from "../constants/actionTypes";

import { Card } from "./models/Card";

const createCard = (store) => (next) => (action) => {
  if (action.type === CREATE_CARD) {
    const card = new Card(action.payload);
    return store.dispatch({ type: ADD_CARD, payload: card });
  }
  return next(action);
};

export default createCard;