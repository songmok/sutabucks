import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import cartSlice from "./cartSlice";
import loggedState from "./loggedState";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: loggedState.reducer,
  },
});
export default store;
