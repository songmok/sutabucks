import React, { useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import FindImg from "asset/images/icon_find_sally.png";
import axios from "api/axios";
import { useSelector } from "react-redux";

const CloseModal = ({ isopen, setIsOpen }) => {
  const miSeq = useSelector((state) => state.user.miSeq);
  const navigate = useNavigate();

  const clickSubmit = () => {
    alert("정말로 탈퇴하시겠습니까?");
    console.log(miSeq);
    axios
      .patch("member/leave?miSeq=" + miSeq)
      .then((res) => {
        console.log(res);
        alert("탈퇴되었습니다.");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("회원 탈퇴에 실패하였습니다. 다시 시도해주세요.");
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
      width: "35%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
    },
  };

  return (
    <ReactModal isOpen={isopen} style={customStyles}>
      <section>
        <div
          className="p-8 pt-4 border border-[#1B3C34]"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <button
            className="absolute block top-7 right-7 text-gray-600"
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
            <div>
              <img
                src={FindImg}
                alt="coffee"
                className="w-56 mx-auto mt-16 mb-8"
              />
            </div>
            <div className="space-y-4 text-center">
              <button
                onClick={() => clickSubmit()}
                className="block w-full px-5 py-3 text-sm text-gray-100
                bg-[#1B3C34] rounded"
              >
                정말로 탈퇴 하시겠습니까?
              </button>
              <button
                className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                회원정보로 되돌아가기
              </button>
            </div>
          </div>
        </div>
      </section>
    </ReactModal>
  );
};

export default CloseModal;
