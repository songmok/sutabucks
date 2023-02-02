import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cartImg from "asset/images/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutAccount } from "reducer/loggedState";
const HeaderRt = () => {
  const cartAmount = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const logOutFn = () => {
    dispatch(logoutAccount());
    navigate("/login");
  };

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
          {/* 로그인 상태 변화 */}
          {user.miSeq === "" ? (
            <ul className="member">
              <li className="member-list">
                <Link to="/login">로그인</Link>
              </li>
              <li className="member-list">
                <Link to="/singupselect">회원가입</Link>
              </li>
            </ul>
          ) : (
            <ul className="member">
              <li className="member-list">
                <Link to="/mypage">My page</Link>
              </li>
              <li className="member-list">
                <button onClick={() => logOutFn()}>로그아웃</button>
              </li>
            </ul>
          )}
        </div>
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
      </div>
    </>
  );
};

export default HeaderRt;
