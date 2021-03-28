"use strict";

const multiActionArray = (store) => (next) => (action) => {
  if (!Array.isArray(action)) {
    return next(action);
  }
  return action.map((item) => store.dispatch(item));
};

export default multiActionArray;
