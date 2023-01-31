import React, { useState } from "react";
import cardImg from "asset/images/card.png";
import CardQrModal from "./modals/CardQrModal";

const MemberCard = () => {
  const btStyle = {
    // position: "absolute",
    // top: "24.5%",
    // right: "34%",
    border: "2px solid #006633",
    padding: "10px",
    backgroundColor: "#fff",
    color: "#006633",
    fontWeight: "bold",
    borderRadius: "10px",
  };

  const [isOpen, setIsOpen] = useState(false);
  const closeAccount = () => {
    setIsOpen(true);
  };
  return (
    <>
      <h1 className="text-xl text-center pt-32">
        [회원 이름 (닉네임)] 님의{" "}
        <span className="font-semibold text-2xl text-green-800">SUTABUCKS</span>{" "}
        멤버십 카드를 조회합니다.
      </h1>
      <div className="flex justify-center gap-16 pt-14">
        <div className="">
          <img src={cardImg} alt="" className="w-96 border-2 border-black " />
        </div>
        <div className="flex flex-col justify-center">
          <span className="pb-6 text-lg">
            카드명: 닉네임 <br /> 카드잔액 : 10000원
          </span>
          <button style={btStyle} onClick={closeAccount}>
            충전하기
          </button>
          <CardQrModal isopen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  );
};

export default MemberCard;
