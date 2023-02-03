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
    plusItem: (state, action) => {
      const cartItem = action.payload;
      const existingItem = state.items.find((item) => item.id === cartItem.id);
      console.log(existingItem);
      if (existingItem) {
        existingItem.sbNumber += 1;
        state.totalPrice +=
          existingItem.optionIncludePrice * existingItem.sbNumber;
      }
    },
    minusItem: (state, action) => {
      const cartItem = action.payload;
      const existingItem = state.items.find((item) => item.id === cartItem.id);
      if (existingItem) {
        existingItem.sbNumber -= 1;
        state.totalPrice -=
          existingItem.optionIncludePrice * existingItem.sbNumber;
      }
    },
    deliteItems: (state, action) => {
      const cartItem = action.payload;
      state.items = state.items.filter((item) => item.id !== cartItem.id);
      state.totalPrice -= cartItem.optionIncludePrice * cartItem.sbNumber;
    },
  },
});

export const userItemActions = userItemSlice.actions;

export default userItemSlice;
