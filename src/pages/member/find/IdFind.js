import React, { useState } from "react";
import axios from "../../../api/axios";
import { FindDiv, Bt } from "../../../style/memberCss/findCSS";
import IdFindModal from "../modals/IdFindModal";

const IdFind = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const idFind = async () => {
    const body = {
      miName: name,
      miPhoneNum: tel,
    };
    console.log(body);
    // 405 err 시 api 주소 정확히 확인 요청.
    await axios
      .post("member/findid/phone", body)
      .then((res) => {
        setIsOpen(true);
      })
      .catch((err) => {
        setIsOpen(false);
        alert("정보를 재입력해주세요.");
      });
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
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>전화번호</label>
          <input
            type="tel"
            placeholder="전화번호를 입력 해주세요."
            required
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </form>
      </FindDiv>
      <div className="flex justify-center mb-[191px]">
        <Bt onClick={idFind}>아이디 찾기</Bt>
      </div>
      {}
      <IdFindModal isopen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default IdFind;
