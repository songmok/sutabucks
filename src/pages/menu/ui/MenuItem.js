import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <Link
      to={props.link}
      key={props.key}
      className="block group cursor-pointer"
    >
      <img
        src={props.img}
        alt="coffee"
        className="w-full transform hover:scale-95 transition duration-300"
      />
      <div className="relative pt-3 bg-white">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {props.name}
        </h3>
        <div className="mt-1.5 flex items-center justify-between text-gray-900">
          <p className="tracking-wide">{props.price}원</p>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
