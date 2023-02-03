import React from "react";
import { Link } from "react-router-dom";
import { FindDiv, Bt } from "../../../style/memberCss/findCSS";
import FindImg from "asset/images/icon_find_sally.png";
import { useSelector } from "react-redux";

const IdResult = () => {
  const findId = useSelector((state) => state.user.memberId);
  return (
    <>
      <div className="text-center text-4xl my-8 ">아이디 찾기</div>
      <FindDiv>
        <form>
          <img src={FindImg} alt="" />
          <p>
            고객님의 아이디는 <b>{findId}</b> 입니다.
          </p>
        </form>
      </FindDiv>
      <div className="flex justify-center">
        <Link to="/login">
          <Bt>로그인</Bt>
        </Link>
      </div>
    </>
  );
};

export default IdResult;
