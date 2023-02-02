import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderMember = ({ user }) => {
  const navigate = useNavigate();
  const logOutFn = () => {
    navigate("/login");
  };
  return (
    <>
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
    </>
  );
};

export default HeaderMember;
