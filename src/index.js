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
<<<<<<< HEAD
    // {/* <PersistGate loading={null}> */}
      <App />
    // {/* </PersistGate> */}
=======
  //   <PersistGate loading={null}>
  <App />
  //   </PersistGate>
>>>>>>> 89aee23c997c63b25cfb7fea7cd70177a91ccf4a
  // </Provider>
);
