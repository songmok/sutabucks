import React from "react";
import { Link } from "react-router-dom";
import SubMenuNews from "./SubMenuNews";
const SubNews = ({ subNews, count, setCount }) => {
  return (
    <>
      {count === 1 ? 
      (
        <div
          className="depth1-wrap active"
          onMouseOver={() => {
            setCount(1);
          }}
        >
          <ul className="submenu">
            {subNews.map((v, i) => {
              return (
                <li className="depth2" key={i}>
                  <Link to={v.url}>{v.name}</Link>
                  <SubMenuNews news={v.submenu} />
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

export default SubNews;
