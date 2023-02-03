import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = ({ totalPrice, toCheckout }) => {
  return (
    <div
      id="summary"
      className="w-full lg:w-1/4 flex flex-col justify-between px-8 py-10 space-y-10 bg-gray-100"
    >
      <h1 className="font-semibold text-2xl text-[#006633]">Order Summary</h1>
      <div className="border-t space-y-3">
        <div className="flex font-semibold justify-between items-center text-sm uppercase">
          <span>총 주문 금액</span>
          <span className="text-xl">{totalPrice}원</span>
        </div>
        <Link
          to="/checkout"
          className="bg-[#1B3C34] font-semibold py-3 text-sm text-white uppercase text-center w-full block"
          onClick={toCheckout}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
