import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const defaultCartState = {
  items: [],
  allChecked: true,
};

//modalData: mbiSeq, mbiName, mbiCost

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    addCartItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.mbiSeq === newItem.mbiSeq && item.option === newItem.option
      );
      if (!existingItem) {
        state.items = [newItem, ...state.items];
      } else {
        existingItem.amount += newItem.amount;
        existingItem.checked = true;
      }
      const checkedItem = state.items.find((item) => item.checked === false);
      if (!checkedItem) {
        state.allChecked = true;
      }
    },
    removeCartItem: (state, action) => {
      const currentItem = action.payload;
      state.items = state.items.filter(
        (item) => item.mbiSeq !== currentItem.mbiSeq
      );
    },
    addAmount: (state, action) => {
      const currentItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.mbiSeq === currentItem.mbiSeq && item.option === currentItem.option
      );
      if (existingItem) {
        existingItem.amount += 1;
      }
    },
    removeAmount: (state, action) => {
      const currentItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.mbiSeq === currentItem.mbiSeq && item.option === currentItem.option
      );
      if (existingItem) {
        if (existingItem.amount > 1) {
          existingItem.amount -= 1;
        }
      }
    },
    removeChecked: (state) => {
      state.items = state.items.filter((item) => !item.checked);
      const existingItem = state.items.find((item) => item.checked);
      // if (existingItem) {
      //   state.allChecked = true;
      // }
      if (existingItem) {
        state.allChecked = true;
      }
      const checkedItem = state.items.find((item) => item.checked === false);
      if (!checkedItem) {
        state.allChecked = true;
      }
    },
    handleClick: (state, action) => {
      const currentItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.mbiSeq === currentItem.mbiSeq
      );
      if (existingItem) {
        existingItem.checked = !currentItem.checked;
      }
      if (!existingItem.checked) {
        state.allChecked = false;
      }
      const checkedItem = state.items.find((item) => item.checked === false);
      if (!checkedItem) {
        state.allChecked = true;
      }
    },
    allClick: (state) => {
      // const currentItem = action.payload;
      const existingItem = state.items.find((item) => item.checked === false);
      if (existingItem) {
        state.items.map((item) => (item.checked = true));
        state.allChecked = true;
      } else {
        state.items.map((item) => (item.checked = false));
        state.allChecked = false;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
