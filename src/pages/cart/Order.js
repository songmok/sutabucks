import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { all } from "axios";
import OrderModal from "./OrderModal";
import OrderHeader from "components/pagesHeader/OrderHeader";

const Order = () => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(1);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState([]);

  const getPosts = async () => {
    const posts = await axios.get("/test.json");
    setData(posts.data.list);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const [bt, setBt] = useState("all");

  const allMenu = data.map((item) => (
    <div
      key={item.mbiSeq}
      className="block group cursor-pointer"
      onClick={() => {
        setModalData(item);
        setModalIsOpen(true);
      }}
    >
      <img
        src={item.img}
        alt="coffee"
        className="w-full transform hover:scale-95 transition duration-300"
      />
      <div className="relative pt-3 bg-white">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {item.mbiName}
        </h3>
        <div className="mt-1.5 flex items-center justify-between text-gray-900">
          <p className="tracking-wide">{item.mbiCost}원</p>
        </div>
      </div>
    </div>
  ));

  const drinkMenu = data
    .filter((item) => item.mbiPcSeq < 3)
    .map((item) => (
      <div
        key={item.mbiSeq}
        className="block group cursor-pointer"
        onClick={() => {
          setModalData(item);
          setModalIsOpen(true);
        }}
      >
        <img
          src={item.img}
          alt="coffee"
          className="w-full transform hover:scale-95 transition duration-300"
        />
        <div className="relative pt-3 bg-white">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {item.mbiName}
          </h3>
          <div className="mt-1.5 flex items-center justify-between text-gray-900">
            <p className="tracking-wide">{item.mbiCost}원</p>
          </div>
        </div>
      </div>
    ));

  const foodMenu = data
    .filter((item) => item.mbiPcSeq > 2)
    .map((item) => (
      <div
        key={item.mbiSeq}
        className="block group cursor-pointer"
        onClick={() => {
          setModalData(item);
          setModalIsOpen(true);
        }}
      >
        <img
          src={item.img}
          alt="coffee"
          className="w-full transform hover:scale-95 transition duration-300"
        />
        <div className="relative pt-3 bg-white">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {item.mbiName}
          </h3>
          <div className="mt-1.5 flex items-center justify-between text-gray-900">
            <p className="tracking-wide">{item.mbiCost}원</p>
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

  console.log(bt);

  return (
    <>
      <OrderHeader />
      <div className="container mx-auto">
        <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-1">
              <button
                value="all"
                className="flex items-center px-4 py-2 rounded-lg cursor-pointer bg-[#1B3C34] text-white"
                onClick={(e) => {
                  setBt(e.target.value);
                }}
              >
                <span className="text-sm font-medium"> 전체 </span>
              </button>
              <button
                value="drink"
                className="flex items-center px-4 py-2 rounded-lg cursor-pointer bg-[#1B3C34] text-white"
                onClick={(e) => {
                  setBt(e.target.value);
                }}
              >
                <span className="text-sm font-medium"> 음료 </span>
              </button>
              <button
                value="food"
                className="flex items-center px-4 py-2 rounded-lg cursor-pointer bg-[#1B3C34] text-white"
                onClick={(e) => {
                  setBt(e.target.value);
                }}
              >
                <span className="text-sm font-medium"> 음식 </span>
              </button>
            </div>
          </div>
          <main className="lg:col-span-4 ml-2">
            <div className="flex flex-wrap justify-end items-center my-5 lg:mb-7">
              <form className="w-full lg:w-[35%]">
                <div className="relative">
                  <input
                    type="search"
                    // id="simple-search"
                    className="bg-gray-50 border border-[#1B3C34] text-gray-900 text-sm rounded-lg block w-full pl-5 p-2.5"
                    placeholder="Search Menu"
                    required
                  />
                  <button className="absolute inset-y-0 right-3 flex items-center pl-3 cursor-pointer">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-[#1B3C34] dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="coffee mb-10">
              <div className="mt-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
                {list()}
                {/* {allMenu} */}
              </div>
              <OrderModal
                amount={amount}
                setAmount={setAmount}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
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
