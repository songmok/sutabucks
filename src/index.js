import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./asset/Fonts/font.css";
import "./index.css";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider 필수 store={store}
  // <Provider>
    // {/* <PersistGate loading={null}> */}
      <App />
    // {/* </PersistGate> */}
  // </Provider>
);
