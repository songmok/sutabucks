import React from "react";
import { Link } from "react-router-dom";
import SubMaps from "./SubMaps";

const MapsGnb = ({ maps, setCount, count }) => {
  return (
    <>
      {maps.map((v, i) => {
        return (
          <li
            className="depth1 maps"
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
              <SubMaps subMaps={v.sub} count={count} setCount={setCount} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default MapsGnb;
