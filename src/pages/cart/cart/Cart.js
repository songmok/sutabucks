import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userItemActions } from "reducer/userItemSlice";
import CartList from "./CartList";
import OrderSummary from "./OrderSummary";

const Carttest = () => {
  const [totalPrice, setTotalPrice] = useState("");
  const [cartList, setCartList] = useState([]);
  const [click, setClick] = useState(1);

  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);
  const miSeq = userData.miSeq;

  // console.log(miSeq);
  // const miSeq = 70;

  const getPosts = async () => {
    const posts = await axios.get(
      `http://haeji.mawani.kro.kr:9999/cart/list?miSeq=${miSeq}&status=1`
    );
    // console.log(posts.data);
    const items = posts.data.memberBasket;
    setCartList(items);
    setTotalPrice(posts.data.totalPrice);
  };

  console.log(cartList);

  const cartItems = cartList.map((item) => {
    // console.log(item.shoppingBasketOption);
    let itemArr = item.shoppingBasketOption;
    // console.log("itemArr : ", itemArr);
    if (itemArr.length == 0) {
      return {
        id: item.id,
        sbiBranchName: item["storeMenuConnect"]["store"].sbiBranchName,
        sbiAddressDetail: item["storeMenuConnect"]["store"].sbiAddressDetail,
        mbiName: item["storeMenuConnect"]["menu"].mbiName,
        sbNumber: item.sbNumber,
        optionIncludePrice: item.optionIncludePrice,
        mbiSeq: item["storeMenuConnect"]["menu"].mbiSeq,
        sbOrderNumber: item.sbOrderNumber,
        sbSmcSeq: item["storeMenuConnect"].smcSeq,
        sbBasketPrice: item.sbBasketPrice,
        moiName: "",
      };
    } else {
      return {
        id: item.id,
        sbiBranchName: item["storeMenuConnect"]["store"].sbiBranchName,
        sbiAddressDetail: item["storeMenuConnect"]["store"].sbiAddressDetail,
        mbiName: item["storeMenuConnect"]["menu"].mbiName,
        sbNumber: item.sbNumber,
        optionIncludePrice: item.optionIncludePrice,
        mbiSeq: item["storeMenuConnect"]["menu"].mbiSeq,
        sbOrderNumber: item.sbOrderNumber,
        sbSmcSeq: item["storeMenuConnect"].smcSeq,
        sbBasketPrice: item.sbBasketPrice,
        moiName: item["shoppingBasketOption"][0]["menuOption"].moiName,
      };
    }
  });

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    getPosts();
  }, [click]);

  console.log(cartItems);

  const toCheckout = (e) => {
    if (cartItems.length <= 0) {
      e.preventDefault();
      alert("장바구니에 담긴 상품이 없습니다.");
    }
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap shadow-md my-10">
          <div className="w-full lg:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b mb-5">
              <h1 className="font-semibold text-2xl text-[#006633]">
                장바구니
              </h1>
            </div>
            <div className="flex justify-center -mx-8 px-6 mt-10 mb-5">
              <div className="flex w-3/6 items-center">
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
              <CartList
                miSeq={miSeq}
                item={item}
                totalPrice={totalPrice}
                click={click}
                setClick={setClick}
              />
            ))}
            <div
              className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </div>
          </div>
          <OrderSummary totalPrice={totalPrice} toCheckout={toCheckout} />
        </div>
      </div>
    </>
  );
};

export default Carttest;
