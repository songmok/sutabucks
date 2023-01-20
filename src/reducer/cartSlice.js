import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

//modalData: mbiSeq, mbiName, mbiCost

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    addCartItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.mbiSeq === newItem.mbiSeq
      );
      if (!existingItem) {
        // state.items.push({
        //   id: newItem.mbiSeq,
        //   title: newItem.mbiName,
        //   price: newItem.mbiCost,
        //   totalPrice: newItem.mbiCost,
        //   img: newItem.img,
        //   amount: newItem.amount,
        // });
        state.items = [newItem, ...state.items];
        state.totalAmount += newItem.amount;
        state.totalPrice += newItem.mbiCost * newItem.amount;
      } else {
        // existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
        // existingItem.totalamount++;
        existingItem.amount += newItem.amount;
      }
      // state.totalAmount++;
    },
    removeCartItem: (state, action) => {
      const currentItem = action.payload;
      state.items = state.items.filter(
        (item) => item.mbiSeq !== currentItem.mbiSeq
      );
      state.totalAmount -= currentItem.amount;
      state.totalPrice -= currentItem.mbiCost * currentItem.amount;
    },
    addAmount: (state, action) => {
      const currentItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.mbiSeq === currentItem.mbiSeq
      );
      if (existingItem) {
        existingItem.amount += 1;
        state.totalAmount += 1;
        state.totalPrice += currentItem.mbiCost;
      }
    },
    removeAmount: (state, action) => {
      const currentItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.mbiSeq === currentItem.mbiSeq
      );
      if (existingItem) {
        if (existingItem.amount > 1) {
          existingItem.amount -= 1;
          state.totalAmount -= 1;
          state.totalPrice -= currentItem.mbiCost;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
