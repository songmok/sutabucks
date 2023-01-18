import React from "react";
import { Link } from "react-router-dom";
const SubCate = ({ cate }) => {
  return (
    <>
      {cate.map((v, i) => {
        return (
          <ul className="depth2-sub" key={i}>
            <li className="sub-list">
              <Link to=""> {v.menu}</Link>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default SubCate;
