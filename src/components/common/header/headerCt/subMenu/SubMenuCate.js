import React from "react";
import { Link } from "react-router-dom";
const SubMenuCate = ({ cate }) => {
  return (
    <>
      <ul className="depth2-sub">
        {cate.map((v, i) => {
          return (
            <li className="sub-list" key={i}>
              <Link to="/"> {v.menu}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SubMenuCate;
