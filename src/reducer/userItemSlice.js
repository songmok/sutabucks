import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const defaultuserItemState = {
  items: [],
  totalPrice: "",
};

// const userData = useSelector((state) => state.user);
// // const miSeq = state.user.miSeq;

const userItemSlice = createSlice({
  name: "userItem",
  initialState: defaultuserItemState,
  reducers: {
    updateItems: (state, action) => {
      const cartItem = action.payload;
      // console.log(cartItem);
      state.items = cartItem.items;
      state.totalPrice = cartItem.totalPrice;
    },
  },
});

export const userItemActions = userItemSlice.actions;

export default userItemSlice;
