import React from "react";
import { Link } from "react-router-dom";
const SubMaps = ({ subMaps, count, setCount }) => {
  return (
    <>
      {count === 3 ? (
        <div
          className="depth1-wrap active"
          onMouseOver={() => {
            setCount(3);
          }}
        >
          <ul className="submenu">
            {subMaps.map((v, i) => {
              return (
                <li className="depth2" key={i}>
                  <Link to="/">{v.name}</Link>
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
export default SubMaps;
