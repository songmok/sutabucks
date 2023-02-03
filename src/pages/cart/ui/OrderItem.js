import React from "react";

const OrderItem = ({ item, setMenuSeq, setModalIsOpen }) => {
  return (
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
  );
};

export default OrderItem;
