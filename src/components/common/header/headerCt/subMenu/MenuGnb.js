import React from "react";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

const MenuGnb = ({ menu, setCount, count }) => {
  return (
    <>
      {menu.map((v, i) => {
        return (
          <li
            className="depth1"
            onMouseOver={() => {
              setCount(v.id);
            }}
            onMouseOut={() => {
              setCount(0);
            }}
            key={i}
          >
            <Link to={v.url}>{v.name}</Link>
            <ul className="submenu">
              <SubMenu subMenu={v.sub} count={count} setCount={setCount} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default MenuGnb;
