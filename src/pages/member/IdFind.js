import React, { useState } from "react";
import { Link } from "react-router-dom";
import FindDiv from "../../style/memberCss/findCSS";
import { Bt } from "../../style/memberCss/findCSS";

const IdFind = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  return (
    <>
      <div className="text-center text-4xl my-8 ">아이디 찾기</div>
      <FindDiv>
        <form>
          <label>이름</label>
          <input
            type="type"
            placeholder="이름을 입력 해주세요."
            required
            maxLength={20}
            value={name}
            onClick={(e) => setName(e.target.value)}
          />
          <br />
          <label>전화번호</label>
          <input
            type="tel"
            placeholder="전화번호를 입력 해주세요."
            required
            value={tel}
            onClick={(e) => setTel(e.target.value)}
          />
        </form>
      </FindDiv>
      <div className="flex justify-center">
        <Link to="/idresult">
          <Bt>아이디 찾기</Bt>
        </Link>
      </div>
    </>
  );
};

export default IdFind;
