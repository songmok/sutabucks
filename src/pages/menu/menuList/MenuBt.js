import React from "react";

const MenuBt = ({ bt, setBt, menuBt, cate }) => {
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
      {menuBt.map((item) => (
        <li key={item.pcSeq}>
          <input
            className="sr-only peer"
            type="radio"
            name="menu"
            id={item.pcName}
            checked={parseInt(bt) === item.pcSeq}
            value={item.pcSeq}
            onClick={(e) => {
              setBt(e.target.value);
            }}
          />
          <label
            className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-200 peer-checked:bg-[#006633] peer-checked:text-white"
            htmlFor={item.pcName}
          >
            {item.pcName}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default MenuBt;
