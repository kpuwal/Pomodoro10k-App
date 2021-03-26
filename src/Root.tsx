"use strict";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const Root = ({ children }) => {
  const store = createStore(
    reducers,
    applyMiddleware(thunk)
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
