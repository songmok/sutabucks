import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const defaultCartItemState = {
  id: "",
  title: "",
  amount: 0,
  price: 0,
};

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: defaultCartItemState,
  reducers: {
    addItem(state, action) {},
    removeItem(state, action) {},
  },
});

export default cartItemSlice;
