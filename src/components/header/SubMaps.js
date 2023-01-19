import React from "react";
import { Link } from "react-router-dom";
const SubMaps = ({ sub, count, setCount }) => {
  console.log(sub);
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
            {sub.map((v, i) => {
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
// <SubMaps />
