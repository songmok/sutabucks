import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FindDiv, Bt } from "../../style/memberCss/findCSS";
import FindModal from "././modals/FindModal";

const IdFind = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const closeAccount = () => {
    setIsOpen(true);
  };
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
        <Bt onClick={closeAccount}>아이디 찾기</Bt>
        <FindModal isopen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default IdFind;
