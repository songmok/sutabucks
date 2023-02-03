import React, { useState } from "react";
import ReactModal from "react-modal";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";

const PwFindModal = ({ isopen, setIsOpen }) => {
  const navigate = useNavigate();
  const [num, setNum] = useState("");

  const clickSubmit = () => {
    setNum();
    console.log(num);
    axios
      .get("/member/findpwd?authNum=" + num)
      .then((res) => {
        console.log(res.data);
        alert("인증번호가 확인되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("인증번호 인증에 실패하였습니다.");
      });
  };

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "420px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
    },
  };

  return (
    <ReactModal isOpen={isopen} style={customStyles}>
      <section>
        <div className="p-8 pt-4 border border-[#1B3C34]" aria-modal="true">
          <button
            className="absolute block top-6 right-6 text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mt-6 space-y-6">
            <p className=" font-semibold text-center">
              회원정보에 등록한 휴대폰으로 인증
            </p>
            <form className=" flex flex-col space-y-3 pt-5">
              <label className="justify-items-start">인증번호 입력</label>
              <input
                type="text"
                className=" border border-black pl-2 py-1"
                value={num}
                onChange={(e) => setNum(e.target.value)}
              />
              <Timer setIsOpen={setIsOpen} />
              <button
                onClick={() => clickSubmit()}
                className="block w-full px-5 py-3 text-sm text-gray-100
                bg-[#1B3C34] rounded"
              >
                인증번호 입력
              </button>
              <span>
                인증번호 일치시,
                <br />
                가입한 이메일로 임시 비밀번호가 발급됩니다.
              </span>
              <button
                className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600 pt-5"
                onClick={() => setIsOpen(false)}
              >
                되돌아가기
              </button>
            </form>
          </div>
        </div>
      </section>
    </ReactModal>
  );
};

export default PwFindModal;
