import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OrderModal from "./OrderModal";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";


const Order = () => {
  const [data, setData] = useState([]);
  const [store, setStore] = useState([]);
  // const [amount, setAmount] = useState(1);

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [modalData, setModalData] = useState([]);

  const getPosts = async () => {
    const params = {
      storeSeq: 2,
    };
    const posts = await instance.get(request.fetchStoreMenu, {
      params,
    });
    setStore(posts.data.list.store);
    setData(posts.data.list.menu);
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(data);
  console.log(store);

  const allMenu = data.map((item) => (
    <div
      key={item.menuNo}
      className="block group cursor-pointer"
      onClick={() => {
        // setModalData(item);
        // setModalIsOpen(true);
      }}
    >
      <img
        src={item.img}
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

  return (
    <>
      <PagesTitle title={"주문메뉴"} />
      <PagesLink first={"주문메뉴"} firstLink={"order"} />
      <div className="container mx-auto">
        <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-1">
              <button>전체</button>
              <button>음료</button>
              <button>음식</button>
            </div>
          </div>
          <main className="lg:col-span-4 ml-2">
            <div className="flex flex-wrap items-center lg:mb-7">
              <span className="text-2xl lg:text-3xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                {store.branch}
              </span>
            </div>
            <div className="coffee mb-10">
              <div className="mt-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
                {data.map((item) => (
                  <div
                    key={item.menuNo}
                    className="block group cursor-pointer"
                    onClick={() => {
                      // setModalData(item);
                      // setModalIsOpen(true);
                    }}
                  >
                    <img
                      src={item.img}
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
                ))}
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
