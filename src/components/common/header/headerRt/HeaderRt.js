import React from "react";
import { Link } from "react-router-dom";
import cartImg from "asset/images/cart.png";
import { useSelector } from "react-redux";
const HeaderRt = () => {
  const cartAmount = useSelector((state) => state.cart);
  return (
    <>
      <div className="header-right">
        <div className="header-right-top">
          <div className="cart">
            <Link to="/cart" className="cart-link">
              <img src={cartImg} alt="cart" />
              <span>장바구니</span>
              <span>_{cartAmount.items.length}</span>
            </Link>
          </div>
          <ul className="member">
            <li className="member-list">
              <Link to="/login">로그인</Link>
            </li>
            <li className="member-list">
              <Link to="/singupselect">회원가입</Link>
            </li>
          </ul>
        </div>
        <div className="header-right-bottom">
          <div className="order">
            <Link to="/order">
              <span>주문메뉴</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderRt;
