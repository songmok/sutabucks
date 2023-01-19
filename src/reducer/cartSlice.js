import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//modalData: mbiSeq, mbiName, mbiCost

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    addCartItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.mbiSeq === newItem.id);
      if (!existingItem) {
        state.item.push({
          id: newItem.mbiSeq,
          title: newItem.mbiName,
          price: newItem.mbiCost,
          totalPrice: newItem.mbiCost,
          amount: 1,
        });
      } else {
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
        existingItem.amount++;
      }
      state.totalAmount++;
      state.cartChange = true;
    },
    removeCartItem: (state, action) => {
      const currentItem = action.payload;
      const targetItem = state.item.find((item) => item.id === currentItem.id);
      if (targetItem.amount === 1) {
        targetItem.amount--;
        state.item = state.item.filter((item) => item.amount !== 0);
      }
      state.totalAmount--;
      targetItem.amount--;
      targetItem.totalPrice -= targetItem.price;
      state.cartChange = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
