import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import OrderQr from "./OrderQr";
import { Frame } from "framer";
const ItemDetail = ({ modalData, amount }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  // console.log(modalData);
  return (
    <div className="flex flex-col items-center">
      <div className="relative block w-[65%] mb-4">
        <img src={modalData.menuUri} alt="coffee" className="mx-auto" />
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
        <Tooltip anchorId="props-basic" content="상세정보를 확인해보세요!" />
        {modalIsOpen && (
          <OrderQr
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            modalData={modalData}
          />
        )}
      </div>
      <span className="block font-bold text-3xl text-center">
        {modalData.menuName}
      </span>
      <span className="block text-gray-600 w-[90%] text-sm mt-2">
        {modalData.menuExplain}
      </span>
    </div>
  );
};

export default ItemDetail;
