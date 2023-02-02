import axios from "../../../api/axios";
import React, { useState } from "react";
import { FindDiv, Bt } from "../../../style/memberCss/findCSS";
import PwFindModal from "../modals/PwFindModal";

const PwFind = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const idCheck = () => {
    axios
      .get("member/findpwd/checkid?miId=" + email)
      .then((res) => {
        console.log(res.data);
        alert("아이디가 존재합니다.");
      })
      .catch((err) => {
        console.log(err);
        alert("아이디가 존재하지 않습니다.");
        setEmail("");
        const email = document.getElementById("email");
        email.focus();
      });
  };

  const pwFind = () => {
    axios
      .post("member/findpwd/phone", { miName: name, miPhoneNum: tel })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        setIsOpen(false);
        alert("정보를 재입력해주세요.");
      });
  };

  return (
    <>
      <div className="text-center text-4xl my-8 ">비밀번호 찾기</div>
      <FindDiv>
        <form>
          <label>* 아이디(이메일) 확인 </label>
          <input
            id="email"
            type="email"
            placeholder="아이디(이메일)를 입력 해주세요."
            required
            maxLength={20}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={idCheck}
            className="border-2 border-green-800 font-bold p-2 w-36 mb-5 mx-auto"
          >
            아이디 확인
          </button>
          <label>이름</label>
          <input
            type="type"
            placeholder="이름을 입력 해주세요."
            required
            maxLength={20}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
      <div className="flex justify-center">
        <Bt onClick={pwFind}>비밀번호 찾기</Bt>
        <PwFindModal isopen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default PwFind;
