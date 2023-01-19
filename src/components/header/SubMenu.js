import React from "react";
import { Link } from "react-router-dom";
import SubCate from "./SubCate";

const SubMenu = ({ sub, count, setCount }) => {
  console.log(sub);
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
            {sub.map((v, i) => {
              return (
                <li className="depth2" key={i}>
                  <Link to="/">{v.name}</Link>
                  <SubCate cate={v.submenu} />
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
