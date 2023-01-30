import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MenudetailCss from "../../style/menuCss/MenudetailCss";
import instance from "../../api/axios";
import request from "../../api/request";
import Modal from "react-modal";

<<<<<<< HEAD
import SubHeaderCss from "style/subHeaderCss/SubHeaderCss";

=======
>>>>>>> 37d9cfe3d5ba8f7670def5a3aa023a4f267ecb48
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

  // const customStyles = {
  //   content: {
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //   },
  // };

  return (
    <MenudetailCss>
      <SubHeaderCss>
        <div className="SubHeader wrap">
          <h1 className="subHeader">메뉴</h1>
          <div className="link">
            <ul>
              <li>
                <Link to="/" className="item">
                  홈
                </Link>
              </li>
              <li className="arrow">{">"}</li>
              <li>
                <Link to="/menu" className="item">
                  메뉴보기
                </Link>
              </li>
              <li className="arrow">{">"}</li>
              <li>
                <Link to="/menudetail" className="item">
                  {detail.menuName}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SubHeaderCss>
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
                // src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
                src="http://haeji.mawani.kro.kr:9999/image/menu/hot_americano"
                alt="test"
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
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <img
                    src="http://haeji.mawani.kro.kr:9999/image/menu/hot_americano"
                    alt="test"
                    className="absolute w-1/2 h-1/2 top-1/4 left-1/4 z-10"
                  />
                  <div className="absolute w-full h-full bg-slate-200 opacity-50"></div>
                </div>
              )}
              {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
              >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                  <input />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button>
                </form>
              </Modal> */}
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
                <div className="mt-4">
                  <div className="detail-title flex justify-between py-5">
                    <span>제품 영양 정보</span>
                    <span>Tall(톨) / 355ml (12 fl oz)</span>
                  </div>
                  <div className="flex gap-5">
                    <div className="detail-left flex-1 p-1">
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                    </div>
                    <div className="flex-1 p-1">
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                      <div className="flex justify-between py-3 my-2">
                        <span>1회 제공량 (kcal)</span>
                        <span>265</span>
                      </div>
                    </div>
                  </div>
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
