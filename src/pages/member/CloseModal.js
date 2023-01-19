import React from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

const CloseModal = ({ isopen, setIsOpen }) => {
  const navigate = useNavigate();
  const clickSubmit = () => {
    alert("정말로 탈퇴하시겠습니까?");
  };
  const clickCancel = () => {
    setIsOpen(false);
    navigate("/mypage");
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
      backgroundColor: "#F3F3F3",
    },
  };
  return (
    <ReactModal isOpen={isopen} style={customStyles}>
      <div>CloseModal</div>
      <button onClick={clickSubmit}>탈퇴하기</button>
      <button onClick={clickCancel}>취소</button>
    </ReactModal>
  );
};

export default CloseModal;
