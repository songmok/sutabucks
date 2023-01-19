import React from "react";
import logoImg from "asset/icon/homepage-logo.png";
import cartImg from "asset/images/cart.png";
import HeaderCss from "style/HeaderCss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <HeaderCss>
        <div className="header-wrap">
          <Link to="/" className="logo">
            <img src={logoImg} alt="logo" />
          </Link>
          <div className="header-center">
            <h1 className="title">SUTABUCKS</h1>
            <nav>
              <ul className="gnb">
                <li className="depth1">
                  <Link to="/">새소식</Link>
                </li>
                <li className="depth1">
                  <Link to="/menu">매뉴보기</Link>
                </li>
                <li className="depth1">
                  <Link to="/delivery">매장선택</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="header-right-top">
              <div className="cart">
                <Link to="/cart" className="cart-link">
                  <img src={cartImg} alt="cart" />
                  <span>장바구니</span>
                </Link>
              </div>
              <ul className="member">
                <li className="member-list">
                  <Link to="/login">로그인</Link>
                </li>
                <li className="member-list">
                  <Link to="/signup">회원가입</Link>
                </li>
              </ul>
            </div>
            <div className="header-right-bottom">
              <div className="order">
                <Link to="/order">
                  <span>주문하기</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HeaderCss>
    </>
  );
};

export default Header;
