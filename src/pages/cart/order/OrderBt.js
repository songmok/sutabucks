import React from "react";

const OrderBt = ({ bt, setBt }) => {
  return (
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
  );
};

export default OrderBt;
