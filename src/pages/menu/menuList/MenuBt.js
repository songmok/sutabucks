import React from "react";
import { Link } from "react-router-dom";

const MenuBt = ({ bt, setBt, menuBt, seq, childSeq, q, setWord }) => {
  console.log(seq);
  return (
    <div className="flex flex-col gap-2">
      <Link
        to={`/menu/cate?seq=${seq}`}
        className={`flex justify-center px-2 py-3 text-sm rounded-lg cursor-pointer ${
          !q && !childSeq ? "bg-[#006633] text-white" : "hover:bg-gray-200"
        }`}
        onClick={() => {
          setWord("");
        }}
      >
        전체 메뉴
      </Link>
      {menuBt.map((item) => (
        <Link
          to={`/menu/cate?seq=${seq}&childSeq=${item.pcSeq}`}
          key={item.pcSeq}
          className={`flex justify-center px-2 py-3 text-sm rounded-lg cursor-pointer
          ${
            childSeq == item.pcSeq
              ? "bg-[#006633] text-white"
              : "hover:bg-gray-200"
          }`}
          onClick={() => {
            setWord("");
          }}
        >
          {item.pcName}
        </Link>
      ))}
    </div>
  );
};

export default MenuBt;
