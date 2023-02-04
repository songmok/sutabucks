import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MenudetailCss from "../../../style/menuCss/MenudetailCss";
import instance from "../../../api/axios";
import request from "../../../api/request";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
import Qr from "./Qr";
import DetailTxt from "./DetailTxt";
import { Tooltip } from "react-tooltip";

const Menudetail = () => {
  // URI 처리 및 데이터 연동
  const [detail, setDetail] = useState([]);

  const navigate = useNavigate();

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

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <MenudetailCss>
      {parseInt(detail.menuCategorySeq) < 5 ? (
        <>
          <PagesTitle title={detail.menuName} />
          <PagesLink
            first={"메뉴보기"}
            firstLink={"/menu"}
            second={"음료"}
            secondLink={"/menu/1"}
            third={detail.menuName}
            thirdLink={"#"}
            count={"three"}
          />
        </>
      ) : (
        ""
      )}
      {parseInt(detail.menuCategorySeq) > 4 ? (
        <>
          <PagesTitle title={detail.menuName} />
          <PagesLink
            first={"메뉴보기"}
            firstLink={"/menu"}
            second={"음식"}
            secondLink={"/menu/2"}
            third={detail.menuName}
            thirdLink={"#"}
            count={"three"}
          />
        </>
      ) : (
        ""
      )}
      <section className="container mx-auto my-10">
        <div className="relative block rounded-lg shadow-lg bg-white">
          <div
            className="absolute block top-7 right-7 text-gray-600 cursor-pointer"
            onClick={() => {
              navigate(-1);
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
          </div>
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
                id="props-basic"
              >
                <div className="animate-bounce flex space-x-4">
                  <div className="rounded-full flex justify-center items-center bg-white drop-shadow h-12 w-12">
                    <span className="font-semibold">QR</span>
                  </div>
                </div>
              </button>
              <Tooltip
                anchorId="props-basic"
                content="상세정보를 확인해보세요!"
              />

              {modalIsOpen && <Qr closeModal={closeModal} detail={detail} />}
            </div>
            <DetailTxt detail={detail} />
          </div>
        </div>
      </section>
    </MenudetailCss>
  );
};

export default Menudetail;
