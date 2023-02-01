import React from "react";
import { Link } from "react-router-dom";
import SubNews from "./SubNews";

const NewsGnb = ({ news, count, setCount }) => {
  return (
    <>
      {news.map((v, i) => {
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
              <SubNews subNews={v.sub} count={count} setCount={setCount} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default NewsGnb;
