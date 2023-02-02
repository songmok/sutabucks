import React from "react";
import { useSelector } from "react-redux";
import HeaderCart from "./cart/HeaderCart";
import HeaderMember from "./member/HeaderMember";
import HeaderOrderBtn from "./orderbtn/HeaderOrderBtn";
const HeaderRt = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="header-right">
        <div className="header-right-top">
          <HeaderCart />
          <HeaderMember user={user} />
        </div>
        <HeaderOrderBtn user={user} />
      </div>
    </>
  );
};
export default HeaderRt;