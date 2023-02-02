import React from "react";
import { Link } from "react-router-dom";
const SubMenuNews = ({ news }) => {
  return (
    <>
      <ul className="depth2-sub">
        {news.map((v, i) => {
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

export default SubMenuNews;
