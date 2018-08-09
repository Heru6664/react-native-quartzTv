import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/store/index";
import { Provider } from "react-redux";
import App from "./src";

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
