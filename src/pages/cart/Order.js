import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from "axios";
import instance from "api/axios";
import requests from "api/request";
import OrderModal from "./OrderModal";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";

const Order = () => {
  const { storeNo } = useParams();

  // const [option, setOption] = useState("전체 메뉴");

  // const handleOptionChange = (changeEvent) => {
  //   setOption(changeEvent.target.value);
  // };

  const [data, setData] = useState([]);
  const [store, setStore] = useState([]);
  const [amount, setAmount] = useState(1);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [menuSeq, setMenuSeq] = useState("");

  const [modalData, setModalData] = useState([]);

  const getPosts = async () => {
    const params = {
      storeSeq: storeNo,
    };
    const posts = await instance.get(requests.fetchStoreMenu, {
      params,
    });
    setStore(posts.data.list.store);
    setData(posts.data.list.menu);
  };

  useEffect(() => {
    getPosts();
  }, []);

  // console.log(data);
  // console.log(store);
  console.log(menuSeq);

  const [bt, setBt] = useState("all");

  const allMenu = data.map((item) => (
    <div
      key={item.menuNo}
      className="block group cursor-pointer"
      onClick={() => {
        setMenuSeq(item.menuNo);
        setModalIsOpen(true);
      }}
    >
      <img
        src={item.menuImageUri}
        alt="coffee"
        className="w-full transform hover:scale-95 transition duration-300"
      />
      <div className="relative pt-3 bg-white">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {item.menuName}
        </h3>
        <div className="mt-1.5 flex items-center justify-between text-gray-900">
          <p className="tracking-wide">{item.menuCost}원</p>
        </div>
      </div>
    </div>
  ));

  const drinkMenu = data
    .filter((item) => item.menuCategoryNo < 5)
    .map((item) => (
      <div
        key={item.menuNo}
        className="block group cursor-pointer"
        onClick={() => {
          setMenuSeq(item.menuNo);
          setModalIsOpen(true);
        }}
      >
        <img
          src={item.menuImageUri}
          alt="coffee"
          className="w-full transform hover:scale-95 transition duration-300"
        />
        <div className="relative pt-3 bg-white">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {item.menuName}
          </h3>
          <div className="mt-1.5 flex items-center justify-between text-gray-900">
            <p className="tracking-wide">{item.menuCost}원</p>
          </div>
        </div>
      </div>
    ));

  const foodMenu = data
    .filter((item) => item.menuCategoryNo > 4)
    .map((item) => (
      <div
        key={item.menuNo}
        className="block group cursor-pointer"
        onClick={() => {
          setMenuSeq(item.menuNo);
          setModalIsOpen(true);
        }}
      >
        <img
          src={item.menuImageUri}
          alt="coffee"
          className="w-full transform hover:scale-95 transition duration-300"
        />
        <div className="relative pt-3 bg-white">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {item.menuName}
          </h3>
          <div className="mt-1.5 flex items-center justify-between text-gray-900">
            <p className="tracking-wide">{item.menuCost}원</p>
          </div>
        </div>
      </div>
    ));

  const list = () => {
    switch (bt) {
      case "all":
        return allMenu;
      case "drink":
        return drinkMenu;
      case "food":
        return foodMenu;
      default:
        return allMenu;
    }
  };

  return (
    <>
      {/* <OrderHeader /> */}
      <div className="container mx-auto">
        <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">
          <div className="lg:col-span-1 mr-2">
            <ul className="flex flex-col gap-2">
              <li>
                <input
                  className="sr-only peer"
                  type="radio"
                  name="menu"
                  id="all"
                  checked={bt === "all"}
                  value="all"
                  onClick={(e) => {
                    setBt(e.target.value);
                  }}
                />
                <label
                  className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-200 peer-checked:bg-[#006633] peer-checked:text-white"
                  htmlFor="all"
                >
                  전체 메뉴
                </label>
              </li>
              <li>
                <input
                  className="sr-only peer"
                  type="radio"
                  name="menu"
                  id="drink"
                  checked={bt === "drink"}
                  value="drink"
                  onClick={(e) => {
                    setBt(e.target.value);
                  }}
                />
                <label
                  className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-200 peer-checked:bg-[#006633] peer-checked:text-white"
                  htmlFor="drink"
                >
                  음료
                </label>
              </li>
              <li>
                <input
                  className="sr-only peer"
                  type="radio"
                  name="menu"
                  id="food"
                  checked={bt === "food"}
                  value="food"
                  onClick={(e) => {
                    setBt(e.target.value);
                  }}
                />
                <label
                  className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-200 peer-checked:bg-[#006633] peer-checked:text-white"
                  htmlFor="food"
                >
                  음식
                </label>
              </li>
            </ul>
          </div>
          <main className="lg:col-span-4 ml-2">
            <div className="flex flex-wrap items-center mb-5 lg:mb-10">
              <span className="text-2xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                {store.branchName}
              </span>
            </div>
            <div className="coffee mb-10">
              <div className="mt-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
                {list()}
              </div>
              <OrderModal
                amount={amount}
                setAmount={setAmount}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                storeNo={storeNo}
                menuSeq={menuSeq}
                modalData={modalData}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Order;
