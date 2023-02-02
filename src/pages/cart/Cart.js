import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "reducer/cartSlice";

const Carttest = () => {
  const [totalPrice, setTotalPrice] = useState("");
  const [cartList, setCartList] = useState([]);

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user);
  // console.log(userData.miSeq);
  const miSeq = userData.miSeq;

  const getPosts = async () => {
    const posts = await axios.get(
      `http://192.168.0.190:9999/cart/list?miSeq=${miSeq}&status=1`
    );
    // console.log(posts.data);
    const items = posts.data.memberBasket;
    setCartList(items);
    setTotalPrice(posts.data.totalPrice);
  };

  useEffect(() => {
    getPosts();
  }, []);

  // console.log(cartList);

  const cartItems = cartList.map((item) => {
    return {
      id: item.id,
      mbiName: item["storeMenuConnect"]["menu"].mbiName,
      moiName: item["shoppingBasketOption"][0]["menuOption"].moiName,
      sbNumber: item.sbNumber,
      sbBasketPrice: item.sbBasketPrice,
      mbiSeq: item["storeMenuConnect"]["menu"].mbiSeq,
      sbOrderNumber: item.sbOrderNumber,
      sbSmcSeq: item["storeMenuConnect"].smcSeq,
    };
  });

  console.log(cartItems);

  // const deleteCart = () => {
  // const body = {
  //   miSeq: miSeq,
  //   sbSmcSeq: item.sbSmcSeq,
  //   sbOrderNumber: item.sbOrderNumber,
  // };
  //   axios
  //     .delete("http://192.168.0.190:9999/cart/delete", body)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap shadow-md my-10">
          <div className="w-full lg:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b mb-5">
              <h1 className="font-semibold text-2xl text-[#1B3C34]">
                장바구니
              </h1>
              {/* <h2 className="font-semibold text-2xl">{itemNumber} Items</h2> */}
            </div>
            {/* <div className="flex justify-end">
              <button
                className="text-sm"
                onClick={() => {
                  dispatch(cartActions.removeChecked());
                }}
              >
                선택삭제
              </button>
            </div> */}
            <div className="flex justify-center -mx-8 px-6 mt-10 mb-5">
              <div className="flex w-3/6 items-center">
                {/* <input
                  className="mr-3 checkbox appearance-none focus:outline-none border border-gray-400 rounded-full cursor-pointer w-5 h-5 checked:border-[5px] checked:border-[#1B3C34]"
                  type="checkbox"
                  // checked={cartData.allChecked}
                  onChange={() => {
                    dispatch(cartActions.allClick());
                  }}
                /> */}
                <h3 className="font-semibold text-gray-600 text-xs uppercase">
                  상품명
                </h3>
              </div>
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
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
              >
                <div className="flex w-3/6 items-center">
                  {/* <input
                    className="mr-3 checkbox appearance-none focus:outline-none border border-gray-400 rounded-full cursor-pointer w-5 h-5 checked:border-[5px] checked:border-[#1B3C34]"
                    type="checkbox"
                    id={item.mbiSeq}
                    onChange={() => {
                      dispatch(cartActions.handleClick(item));
                    }}
                    checked={item.checked}
                  /> */}
                  <div className="flex flex-col justify-center ml-4 flex-grow">
                    <span className="font-bold text-sm">
                      {item.mbiName} - {item.moiName}
                    </span>
                  </div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <button>
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>
                  <span className="mx-4">{item.sbNumber}</span>
                  <button>
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>
                </div>
                <div className="w-1/6 flex justify-center">
                  <button
                    className="text-gray-600 transition hover:text-red-600"
                    onClick={() => {
                      if (window.confirm("정말 삭제하시겠습니까?")) {
                        const body = {
                          miSeq: miSeq,
                          sbSmcSeq: item.sbSmcSeq,
                          sbOrderNumber: item.sbOrderNumber,
                        };
                        axios
                          .delete("http://192.168.0.190:9999/cart/delete", body)
                          .then((res) => {
                            console.log(res);
                            console.log(body);
                          })
                          .catch((err) => {
                            console.log(err);
                            console.log(body);
                          });
                      }
                    }}
                  >
                    <span className="sr-only">Remove item</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
                <div className="w-1/6 flex justify-center">
                  <span className="font-semibold text-sm">
                    {item.sbBasketPrice}원
                  </span>
                </div>
              </div>
            ))}
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
          <div
            id="summary"
            className="w-full lg:w-1/4 flex flex-col justify-between px-8 py-10 space-y-10 bg-gray-100"
          >
            <h1 className="font-semibold text-2xl text-[#1B3C34]">
              Order Summary
            </h1>
            <div className="border-t space-y-3">
              <div className="flex font-semibold justify-between items-center text-sm uppercase">
                <span>총 주문 금액</span>
                <span className="text-xl">{totalPrice}원</span>
              </div>
              <Link
                to="/checkout"
                className="bg-[#1B3C34] font-semibold py-3 text-sm text-white uppercase text-center w-full block"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carttest;
