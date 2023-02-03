import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { userItemActions } from "reducer/userItemSlice";
// import { useDispatch } from "react-redux";
// import { cartActions } from "reducer/cartSlice";
import instance from "../../../../api/axios";
import request from "../../../../api/request";
import ItemDetail from "./ItemDetail";

const OrderModal = ({
  // amount,
  // setAmount,
  modalIsOpen,
  setModalIsOpen,
  storeNo,
  menuSeq,
  miSeq,
}) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [option, setOption] = useState(1);
  const [modalData, setModalData] = useState([]);
  const [amount, setAmount] = useState(1);

  const [storeSeq, setStoreSeq] = useState([]);

  const dispatch = useDispatch();

  const getModal = async () => {
    const params = {
      storeSeq: storeNo,
      menuSeq: menuSeq,
    };
    const modalPosts = await instance.get(request.fetchStoreMenuDetail, {
      params,
    });
    console.log(modalPosts.data.MenuDetail);
    setStoreSeq(modalPosts.data.MenuDetail.sbSmcSeq);
    setModalData(modalPosts.data.MenuDetail.detail);
    // setOption(modalPosts.data.MenuDetail.options[0].option);
  };

  useEffect(() => {
    getModal();
  }, [menuSeq]);

  console.log(modalData.menuCategorySeq);

  // 카트 아이템 추가
  const [totalPrice, setTotalPrice] = useState("");
  const [cartList, setCartList] = useState([]);

  const getPosts = async () => {
    const posts = await axios.get(
      `http://haeji.mawani.kro.kr:9999/cart/list?miSeq=${miSeq}&status=1`
    );
    // console.log(posts.data);
    const items = posts.data.memberBasket;
    setCartList(items);
    setTotalPrice(posts.data.totalPrice);
  };

  const cartItems = cartList.map((item) => {
    return {
      id: item.id,
      sbiBranchName: item["storeMenuConnect"]["store"].sbiBranchName,
      sbiAddressDetail: item["storeMenuConnect"]["store"].sbiAddressDetail,
      mbiName: item["storeMenuConnect"]["menu"].mbiName,
      moiName: item["shoppingBasketOption"][0]["menuOption"].moiName,
      sbNumber: item.sbNumber,
      optionIncludePrice: item.optionIncludePrice,
      mbiSeq: item["storeMenuConnect"]["menu"].mbiSeq,
      sbOrderNumber: item.sbOrderNumber,
      sbSmcSeq: item["storeMenuConnect"].smcSeq,
    };
  });

  useEffect(() => {
    getPosts();
  }, [modalIsOpen]);

  // console.log(storeSeq);
  // console.log(option);

  const handleOptionChange = (changeEvent) => {
    setOption(changeEvent.target.value);
  };

  const increase = () => setAmount(parseInt(amount) + 1);

  const decrease = () => {
    amount > 1 && setAmount(parseInt(amount) - 1);
  };
  // const dispatch = useDispatch();

  // const pushCart = () => {
  //   const item = { ...modalData, amount, option, checked: true };
  //   dispatch(cartActions.addCartItem(item));
  //   setAmount(1);
  //   setModalIsOpen(false);
  // };

  const pushCart = () => {
    const body = {
      miSeq: miSeq,
      sbSmcSeq: storeSeq,
      shoppingBasketVo: {
        sbSmcSeq: menuSeq,
        sbNumber: amount,
      },
      shoppingBasketOption: [
        {
          sboNumber: amount,
          sboMoiSeq: option,
        },
      ],
    };
    axios
      .put("http://haeji.mawani.kro.kr:9999/cart/add", body)
      .then((res) => {
        console.log(res);
        console.log(body);
      })
      .catch((err) => {
        console.log(err);
      });
    setAmount(1);
    setModalIsOpen(false);
    dispatch(userItemActions.updateItems({ items: cartItems, totalPrice }));
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: "9999",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "35%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#f3f3f3",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => {
        setModalIsOpen(false);
        setAmount(1);
      }}
      style={customStyles}
    >
      <section>
        <div
          className="flex flex-col justify-center items-center gap-5 px-3 py-2"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <button
            className="absolute block top-7 right-7 text-gray-600"
            onClick={() => {
              setModalIsOpen(false);
              setAmount(1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ItemDetail modalData={modalData} amount={amount} />
          <div className="flex flex-col w-full items-center">
            <span className="block text-custom-yellow font-bold text-3xl text-center">
              {(modalData.menuCost + (parseInt(option) - 1) * 500) * amount} 원
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                onClick={decrease}
              >
                -
              </button>
              {amount}
              <button
                type="button"
                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                onClick={increase}
              >
                +
              </button>
            </div>
            {/* {parseInt(modalData.menuCategorySeq) < 5 && (
              <ul className="flex w-3/4 justify-center items-stretch gap-2 my-1">
                <li className="relative flex-1">
                  <input
                    className="sr-only peer"
                    type="radio"
                    value="1"
                    name="size"
                    id="1"
                    checked={parseInt(option) === 1}
                    onChange={handleOptionChange}
                  />
                  <label
                    className="flex h-full items-center justify-center text-center px-2 py-2 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#CCAA86] peer-checked:ring-2 peer-checked:border-transparent"
                    htmlFor="1"
                  >
                    Tall
                  </label>
                </li>
                <li className="relative flex-1">
                  <input
                    className="sr-only peer"
                    type="radio"
                    value="2"
                    name="size"
                    id="2"
                    checked={parseInt(option) === 2}
                    onChange={handleOptionChange}
                  />
                  <label
                    className="flex h-full items-center justify-center text-center px-2 py-2 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#B05B10] peer-checked:ring-2 peer-checked:border-transparent"
                    htmlFor="2"
                  >
                    Grande
                    <br />+ 500
                  </label>
                </li>
                <li className="relative flex-1">
                  <input
                    className="sr-only peer"
                    type="radio"
                    value="3"
                    name="size"
                    id="3"
                    checked={parseInt(option) === 3}
                    onChange={handleOptionChange}
                  />
                  <label
                    className="flex h-full items-center justify-center text-center px-2 py-2 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#480405] peer-checked:ring-2 peer-checked:border-transparent"
                    htmlFor="3"
                  >
                    Venti
                    <br />+ 1000
                  </label>
                </li>
              </ul>
            )} */}
            <ul className="flex w-3/4 justify-center items-stretch gap-2 my-1">
              <li className="relative flex-1">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="1"
                  name="size"
                  id="1"
                  checked={parseInt(option) === 1}
                  onChange={handleOptionChange}
                />
                <label
                  className="flex h-full items-center justify-center text-center px-2 py-2 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#CCAA86] peer-checked:ring-2 peer-checked:border-transparent"
                  htmlFor="1"
                >
                  Tall
                </label>
              </li>
              <li className="relative flex-1">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="2"
                  name="size"
                  id="2"
                  checked={parseInt(option) === 2}
                  onChange={handleOptionChange}
                />
                <label
                  className="flex h-full items-center justify-center text-center px-2 py-2 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#B05B10] peer-checked:ring-2 peer-checked:border-transparent"
                  htmlFor="2"
                >
                  Grande
                  <br />+ 500
                </label>
              </li>
              <li className="relative flex-1">
                <input
                  className="sr-only peer"
                  type="radio"
                  value="3"
                  name="size"
                  id="3"
                  checked={parseInt(option) === 3}
                  onChange={handleOptionChange}
                />
                <label
                  className="flex h-full items-center justify-center text-center px-2 py-2 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-[#480405] peer-checked:ring-2 peer-checked:border-transparent"
                  htmlFor="3"
                >
                  Venti
                  <br />+ 1000
                </label>
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-center">
            <button
              className="block w-full px-5 py-3 text-sm text-gray-100 bg-[#1B3C34] rounded"
              onClick={pushCart}
            >
              Add to Cart
            </button>
            <button
              className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
              onClick={() => {
                setModalIsOpen(false);
                setAmount(1);
              }}
            >
              Continue shopping
            </button>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default OrderModal;
