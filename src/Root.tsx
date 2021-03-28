"use strict";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";

import multiactionArray from "./redux/middleware/multiactionArray";
import createCard from "./redux/middleware/createCard";
import { manageStorage } from "./redux/middleware/manageStorage";

// TO FIX type of Root
const Root = ({ children }) => {
  const store = createStore(
    reducers,
    applyMiddleware(thunk, multiactionArray, manageStorage, createCard)
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
