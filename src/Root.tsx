"use strict";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./reduxToolkit/store";

import { PersistGate } from "redux-persist/lib/integration/react";

const Root: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        {children}
      </PersistGate>
    </Provider>);
};

export default Root;
