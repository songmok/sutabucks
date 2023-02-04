import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderCart from "./cart/HeaderCart";
import HeaderMember from "./member/HeaderMember";
import HeaderOrderBtn from "./orderbtn/HeaderOrderBtn";
const HeaderRt = ({ scrollPosition, WOW }) => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {scrollPosition < 100 ? (
        <>
          <div className="header-right ">
            <div className="header-right-top">
              <HeaderCart />
              <HeaderMember user={user} />
            </div>
            <HeaderOrderBtn user={user} />
          </div>
          <button className="text-2xl absolute top-32 right-[430px] ">
            <Link to="/teammember">Team</Link>
          </button>
        </>
      ) : (
        <>
          <div className="header-right">
            <div className="header-right-top">
              <HeaderCart />
              <HeaderMember user={user} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default HeaderRt;
