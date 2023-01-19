import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./asset/Fonts/font.css";
import "./index.css";
import ReactModal from "react-modal";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import store from "reducer/store";

ReactModal.setAppElement("#root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider 필수 store={store}
  <Provider store={store}>
    {/* <PersistGate loading={null}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);
