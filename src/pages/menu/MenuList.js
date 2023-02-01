import React from "react";
import { Link } from "react-router-dom";

const MenuList = ({ searchData }) => {
  return searchData.map((item) => (
    <Link
      to={`/menudetail/${item.menuNo}`}
      key={item.menuNo}
      className="block group cursor-pointer"
    >
      <img
        // src="./coffee.jpg"
        src={item.menuUri}
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
    </Link>
  ));
};

export default MenuList;
