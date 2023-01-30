import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "reducer/cartSlice";
import CheckouttCss from "style/cartCss/CheckoutCss";

const Checkout = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart);

  const cartItemData = cartData.items;

  const totalPrice = cartItemData.reduce(
    (acc, cur) => acc + cur.mbiCost * cur.amount,
    0
  );

  const coupons = ["없음", "쿠폰1", "쿠폰2", "쿠폰3"];
  const [menu, setMenu] = useState(false);
  const [coupon, setCoupon] = useState("없음");

  const changeText = (e) => {
    setMenu(false);
    setCoupon(e.target.textContent);
  };

  const textarea = useRef();
  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  return (
    <CheckouttCss>
      <section className="container mx-auto">
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center">
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex justify-start flex-col items-start space-y-3">
              <Link
                to="/cart"
                className="flex items-center text-gray-600 hover:text-gray-500 space-x-1"
              >
                <p className="text-lg leading-none">&lt; Back</p>
              </Link>
              <span className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Checkout
              </span>
            </div>
            <div className="flex flex-col justify-center space-y-6 w-full">
              <div className="flex flex-col bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full shadow-md">
                <span className="mb-4 text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                  주문매장
                </span>
                <div className="flex flex-col itmes-center w-full">
                  <table className="mx-5">
                    <tr className="flex justify-start py-7">
                      <td className="w-1/4 text-xl font-semibold">
                        대구 동성로
                      </td>
                      <td className="text-slate-500 text-xl">
                        대구광역시 중구 13길
                      </td>
                    </tr>
                    <tr className="flex justify-start py-7">
                      <td className="w-1/4 text-xl font-semibold">
                        매장픽업 / 배달
                      </td>
                      <td className="text-slate-500 text-xl">매장픽업</td>
                    </tr>
                    <tr className="flex justify-start py-7">
                      <td className="w-1/4 text-xl font-semibold">닉네임</td>
                      <td className="text-slate-500 text-xl">홍길동</td>
                    </tr>
                    <tr className="flex justify-start py-7">
                      <td className="w-1/4 text-xl font-semibold">전화번호</td>
                      <td className="text-slate-500 text-xl">010-0000-0000</td>
                    </tr>
                    <tr className="relative flex justify-start items-center py-3">
                      <td className="w-1/4 text-xl font-semibold">
                        주문시 요청사항
                      </td>
                      <td className="w-3/4 text-slate-500 text-xl">
                        <input
                          className="w-full border border-gray-300 p-4 rounded text-base leading-4 placeholder-gray-600 text-gray-600"
                          type="text"
                          placeholder="주문시 요청사항을 입력하세요"
                          onChange={handleResizeHeight}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="flex flex-col bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full shadow-md">
                <span className="mb-4 text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                  주문메뉴
                </span>
                <div className="flex flex-col itmes-center w-full">
                  {cartItemData.map((item) => (
                    <div
                      key={item.mbiSeq}
                      className="flex items-center hover:bg-gray-100 mx-5 py-7"
                      style={{ borderBottom: "1px solid #cccccc" }}
                    >
                      <div className="flex w-4/6 items-center">
                        <div className="flex flex-col justify-center ml-4 flex-grow">
                          <span className="font-bold">
                            {item.mbiName} - {item.option}
                          </span>
                        </div>
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <span className="mx-4">{item.amount}</span>
                      </div>
                      <div className="w-1/6 flex justify-center">
                        <span className="font-semibold">
                          {item.mbiCost * item.amount}원
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end items-center mx-5 py-7">
                    <span className="w-1/6 text-center">Total</span>
                    <span className="w-1/6 text-center font-semibold text-xl">
                      {totalPrice}원
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full shadow-md">
                <span className="mb-4 text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                  할인 및 포인트
                </span>
                <div className="flex flex-col itmes-center w-full">
                  <table className="mx-5">
                    <tr className="relative flex justify-start items-center py-3">
                      <td className="w-1/4 text-xl font-semibold">쿠폰 할인</td>
                      <div
                        className="relative w-1/4"
                        onClick={() => setMenu(!menu)}
                      >
                        <button
                          className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                          type="email"
                        >
                          {coupon}
                        </button>
                        <svg
                          className={
                            "transform  cursor-pointer absolute top-4 right-4 " +
                            (menu ? "rotate-180" : "")
                          }
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 5.75L8 10.25L12.5 5.75"
                            stroke="#27272A"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div
                          className={
                            "mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " +
                            (menu ? "block" : "hidden")
                          }
                        >
                          {coupons.map((coupon) => (
                            <div
                              key={coupon}
                              className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                              onClick={changeText}
                            >
                              {coupon}
                            </div>
                          ))}
                        </div>
                      </div>
                    </tr>
                    <tr className="flex justify-start py-7">
                      <td className="w-1/4 text-xl font-semibold">포인트</td>
                      <td className="text-slate-500 text-xl">포인트</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="flex flex-col bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full shadow-md">
                <span className="mb-4 text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                  결제
                </span>
                <div className="flex flex-col itmes-center w-full">
                  <table className="mx-5">
                    <tr className="flex justify-start py-7">
                      <td className="w-1/4 flex items-center text-xl font-semibold">
                        <input
                          className="mr-3 checkbox appearance-none focus:outline-none border border-gray-400 rounded-full cursor-pointer w-5 h-5 checked:border-[5px] checked:border-[#1B3C34]"
                          type="checkbox"
                        />
                        <span>멤버십 결제</span>
                      </td>
                      <td className="w-full">
                        <span className="text-slate-500 text-xl">멤버십</span>
                        <div className="bg-[#1B3C34] font-semibold py-3 text-sm text-white uppercase text-center w-1/2 block">
                          결제하기
                        </div>
                      </td>
                    </tr>
                    <tr className="flex justify-start py-7">
                      <td className="w-1/4 flex items-center text-xl font-semibold">
                        <input
                          className="mr-3 checkbox appearance-none focus:outline-none border border-gray-400 rounded-full cursor-pointer w-5 h-5 checked:border-[5px] checked:border-[#1B3C34]"
                          type="checkbox"
                        />
                        <span>일반 결제</span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CheckouttCss>
  );
};

export default Checkout;
