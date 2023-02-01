import React from "react";

const OrderList = () => {
  const list = data.map((item) => (
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
  return <div>{list}</div>;
};

export default OrderList;
