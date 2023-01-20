import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FindDiv, Bt } from "../../style/memberCss/findCSS";

const PwFind = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <div className="text-center text-4xl my-8 ">비밀번호 찾기</div>
      <FindDiv>
        <form>
          <label>아이디(이메일)</label>
          <input
            type="email"
            placeholder="아이디(이메일)를 입력 해주세요."
            required
            maxLength={20}
            value={email}
            onClick={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>이름</label>
          <input
            type="type"
            placeholder="이름을 입력 해주세요."
            required
            maxLength={20}
            value={name}
            onClick={(e) => setName(e.target.value)}
          />
        </form>
      </FindDiv>
      <div className="flex justify-center">
        <Link to="/pwresult">
          <Bt>비밀번호 찾기</Bt>
        </Link>
      </div>
    </>
  );
};

export default PwFind;
