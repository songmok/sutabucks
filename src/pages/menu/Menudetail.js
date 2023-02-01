import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MenudetailCss from "../../style/menuCss/MenudetailCss";
import instance from "../../api/axios";
import request from "../../api/request";
import MenuDetailHeader from "components/pagesHeader/MenuDetailHeader";

const Menudetail = () => {
  // URI 처리 및 데이터 연동
  const [detail, setDetail] = useState([]);

  const { seq } = useParams();

  const fetchData = async () => {
    const params = {
      menuNo: seq,
    };
    const resultDetail = await instance.get(request.fetchMenuDetail, {
      params,
    });
    setDetail(resultDetail.data.detail);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(detail);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <MenudetailCss>
      <MenuDetailHeader />
      <section className="container mx-auto my-10">
        <div className="relative block rounded-lg shadow-lg bg-white">
          <Link
            to="/menu"
            className="absolute block top-7 right-7 text-gray-600"
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
          </Link>
          <div className="flex flex-wrap items-center p-5">
            <div className="relative block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
              <img
                src={detail.menuUri}
                alt="menu"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
              <button
                className="absolute bottom-3 right-3 h-12 w-12"
                onClick={openModal}
              >
                <div className="animate-bounce flex space-x-4">
                  <div className="rounded-full flex justify-center items-center bg-white drop-shadow h-12 w-12">
                    <span className="font-semibold">QR</span>
                  </div>
                </div>
              </button>
              {modalIsOpen && (
                <div
                  className="absolute w-full h-full rounded"
                  onClick={closeModal}
                >
                  <button className="absolute block top-5 right-5 z-10">
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
                  <img
                    src={detail.menuQrUri}
                    alt="qr"
                    className="absolute w-1/2 h-1/2 top-1/4 left-1/4 z-10"
                  />
                  <div className="absolute w-full h-full bg-white opacity-50"></div>
                </div>
              )}
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <div className="flex justify-between mt-8">
                  <div className="max-w-[35ch]">
                    <h1 className="text-2xl font-bold">{detail.menuName}</h1>
                  </div>
                  <p className="text-2xl font-bold">{detail.menuCost}원</p>
                </div>
                <details className="group relative my-10">
                  <summary className="block">
                    <div>
                      <div className="max-w-none leading-5">
                        <p>{detail.menuExplain}</p>
                      </div>
                    </div>
                  </summary>
                </details>
                <div className="hidden sm:block">
                  <img src={detail.menuNutritionUri} alt="Nutrition" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MenudetailCss>
  );
};

export default Menudetail;
