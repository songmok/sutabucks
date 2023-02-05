import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from "axios";
import instance from "api/axios";
import requests from "api/request";
import OrderModal from "./orderModal/OrderModal";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
import { useSelector } from "react-redux";
import OrderList from "./OrderList";
import OrderBt from "./OrderBt";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = () => {
  const { storeNo } = useParams();
  const userData = useSelector((state) => state.user);
  console.log(userData);

  // const [option, setOption] = useState("전체 메뉴");

  // const handleOptionChange = (changeEvent) => {
  //   setOption(changeEvent.target.value);
  // };

  const [data, setData] = useState([]);
  const [store, setStore] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [menuSeq, setMenuSeq] = useState("");

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

  // const listName = () => {
  //   switch (bt) {
  //     case "all":
  //       return (
  //         <span className="text-xl lg:text-2xl font-semibold leading-7 lg:leading-9 drop-shadow-sm">
  //           전체 메뉴
  //         </span>
  //       );
  //     case "drink":
  //       return (
  //         <span className="text-xl lg:text-2xl font-semibold leading-7 lg:leading-9 drop-shadow-sm">
  //           음료
  //         </span>
  //       );
  //     case "food":
  //       return (
  //         <span className="text-xl lg:text-2xl font-semibold leading-7 lg:leading-9 drop-shadow-sm">
  //           음식
  //         </span>
  //       );
  //     default:
  //       return (
  //         <span className="text-2xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
  //           전체 메뉴
  //         </span>
  //       );
  //   }
  // };
  const notify = () => toast.success("장바구니에 추가되었습니다 👏");

  return (
    <>
      {/* <OrderHeader /> */}
      <PagesTitle title={store.branchName} />
      <PagesLink
        first={"매장찾기"}
        firstLink={"/maps"}
        second={store.branchName}
        secondLink={"#"}
        count={"two"}
      />
      <div className="container mx-auto">
        <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">
          <div className="lg:col-span-1 mr-2">
            <OrderBt bt={bt} setBt={setBt} />
          </div>
          <main className="lg:col-span-4 ml-2">
            {/* <div className="flex justify-between items-center mb-7">
              <span className="text-2xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-[#006633] drop-shadow-sm">
                {store.branchName}
              </span>
              {listName()}
            </div> */}
            <div className="coffee mb-10">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
                <OrderList
                  data={data}
                  setMenuSeq={setMenuSeq}
                  setModalIsOpen={setModalIsOpen}
                  bt={bt}
                />
              </div>
              <OrderModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                miSeq={userData.miSeq}
                storeNo={storeNo}
                menuSeq={menuSeq}
                notify={notify}
              />
              <ToastContainer
                position="bottom-center"
                limit={1}
                closeButton={true}
                autoClose={1000}
                hideProgressBar={false}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Order;
