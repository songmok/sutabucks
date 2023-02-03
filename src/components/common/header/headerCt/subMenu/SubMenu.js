import React from "react";
import { Link } from "react-router-dom";
import SubMenuCate from "./SubMenuCate";

const SubMenu = ({ subMenu, count, setCount }) => {
  return (
    <>
      {count === 2 ? (
        <div
          className="depth1-wrap active"
          onMouseOver={() => {
            setCount(2);
          }}
        >
          <ul className="submenu">
            {subMenu.map((v, i) => {
              return (
                <li className="depth2" key={i}>
                  <Link to={v.url}>{v.name}</Link>
                  <SubMenuCate cate={v.submenu} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SubMenu;
// <SubMenu />
