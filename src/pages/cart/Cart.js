import React, { useState } from "react";
import { Link } from "react-router-dom";

const Carttest = () => {
  const [value, setValue] = useState(1);

  const increase = () => setValue(parseInt(value) + 1);

  const decrease = () => {
    value > 1 && setValue(parseInt(value) - 1);
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap shadow-md my-10">
          <div className="w-full lg:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl text-[#1B3C34]">
                Shopping Cart
              </h1>
              <h2 className="font-semibold text-2xl">3 Items</h2>
            </div>
            <div className="flex justify-center -mx-8 px-6 mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/6">
                상품명
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center">
                수량
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center">
                주문관리
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/6 text-center">
                주문금액
              </h3>
            </div>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-3/6">
                <div className="w-20">
                  <img
                    src="./coffee.jpg"
                    alt="coffee"
                    className="object-cover w-24 h-24 rounded"
                  />
                </div>
                <div className="flex flex-col justify-center ml-4 flex-grow">
                  <span className="font-bold text-sm">돌체 콜드 브루</span>
                </div>
              </div>
              <div className="w-1/6 flex justify-center">
                <button type="button" onClick={decrease}>
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
                <input
                  className="mx-3 border text-center w-8"
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button type="button" onClick={increase}>
                  {" "}
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
              <div className="w-1/6 flex justify-center">
                <button className="text-gray-600 transition hover:text-red-600">
                  <span className="sr-only">Remove item</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-1/6 flex justify-center">
                <span className="font-semibold text-sm">4,000원</span>
              </div>
            </div>
            <Link
              to="/order"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
          <div id="summary" className="w-full lg:w-1/4 px-8 py-10 bg-gray-100">
            <h1 className="font-semibold text-2xl text-[#1B3C34] border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">item 3</span>
              <span className="text-sm">4,000</span>
            </div>
            <div className="py10">
              <label
                for="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 mt-5 text-sm text-white uppercase">
                Apply
              </button>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between items-center py-6 text-sm uppercase">
                <span>총 주문 금액</span>
                <span className="text-xl">4,000원</span>
              </div>
              <button className="bg-[#1B3C34] font-semibold py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carttest;
