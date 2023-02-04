import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAccount } from "reducer/loggedState";

const HeaderMember = ({ user, WOW }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutFn = () => {
    dispatch(logoutAccount());
    navigate("/login");
  };

  return (
    <>
      {user.miSeq === "" ? (
        <ul className="member">
          <li className="member-lists ">
            <Link to="/login">로그인</Link>
          </li>
          <li className="member-lists ">
            <Link to="/singupselect">회원가입</Link>
          </li>
        </ul>
      ) : (
        <ul className="member">
          <li className="member-list">
            <Link to="/mypage">
              <strong>{user.miNickname}</strong> 님 환영합니다.
            </Link>
          </li>
          <li className="member-list">
            <button onClick={() => logOutFn()}>로그아웃</button>
          </li>
        </ul>
      )}
    </>
  );
};

export default HeaderMember;
