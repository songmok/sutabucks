import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginDiv from "./loginCSS";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const loginFunc = (e) => {
    e.preventDefault();

    // 인풋창 하단 에러 메세지 ?
    if (!id) {
      setErrMsg("아이디(이메일)를 입력해주세요.");
    } else if (!pw) {
      setErrMsg("비밀번호를 입력해주세요.");
    }
  };

  return (
    <>
      {/* 배경이미지 삽입 */}
      <div className="text-center text-4xl font-semibold my-8">로그인</div>
      {/*  text-white 배경 삽입 후 추가 */}
      <LoginDiv>
        <div className="ml-5 pb-7 border-b ">
          <p>Welcome!</p> 수타벅스 코리아에 오신 것을 환영합니다.
        </div>
        <form>
          <input
            type="email"
            placeholder="아이디(이메일)를 입력 해주세요."
            required
            maxLength={20}
            value={id}
            onClick={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력 해주세요."
            value={pw}
            minLength={6}
            maxLength={20}
            required
            onClick={(e) => setPw(e.target.value)}
          />
          {errMsg !== "" && <span className="text-red-600 ">{errMsg}</span>}
          <div>
            {/* 체크박스 색상 변경 초록색으로 */}
            <input type="checkbox" className="" />
            <span className="ml-2 mb-4">아이디 저장</span>
          </div>
          <button onClick={(e) => loginFunc(e)}>로그인</button>

          <div className="flex items-center justify-around m-5">
            <Link to="/signup">회원가입</Link>|
            <Link to="/idfind">아이디 찾기</Link>|
            <Link to="/pwfind">비밀번호 찾기</Link>
          </div>
        </form>
      </LoginDiv>
    </>
  );
};

export default Login;
