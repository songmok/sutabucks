import React from "react";
import { Link } from "react-router-dom";
import FindDiv from "../../style/memberCss/findCSS";
import { Bt } from "../../style/memberCss/findCSS";
import FindImg from "asset/images/icon_find_sally.png";

const PwResult = () => {
  return (
    <>
      <div className="text-center text-4xl my-8 ">아이디 찾기</div>
      <FindDiv>
        <form>
          <img src={FindImg} alt="" />
          <p>
            고객님의 비밀번호는 <b>And***</b> 입니다.
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

export default PwResult;
