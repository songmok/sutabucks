import React from "react";
import { Link } from "react-router-dom";
const HeaderOrderBtn = ({ user }) => {
  return (
    <>
      {user.miBusinessNum === "" ? (
        <div className="header-right-bottom">
          <div className="order">
            <Link to="/order">
              <span>주문메뉴</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="header-right-bottom">
          <div className="order">
            <Link to="/order">
              <span>My store</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderOrderBtn;
