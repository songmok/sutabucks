import React, { useState } from "react";
import cardImg from "asset/images/card.png";
import CardQrModal from "./modals/CardQrModal";
import axios from "api/axios";
import { useSelector } from "react-redux";

const MemberCard = () => {
  const miSeq = useSelector((state) => state.user.miSeq);
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
  const chargeCard = () => {
    setIsOpen(true);
    axios.get("card/detail?memberNo=" + miSeq);
  };
  const closeCard = () => {
    axios
      .delete("card/delete?memberNo=" + miSeq)
      .then((res) => {
        console.log(res);
        alert("멤버십 카드가 삭제되었습니다.");
      })
      .catch((err) => console.log(err));
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
          <img
            src={cardImg}
            alt=""
            className="w-96 "
            style={{ border: "1px solid black ", borderRadius: "4px" }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="pb-6 text-lg">
            카드명: 닉네임 <br /> 카드잔액 : 10000원
          </span>
          <button style={btStyle} onClick={chargeCard}>
            충전하기
          </button>
          <button style={btStyle} onClick={closeCard}>
            카드삭제
          </button>
          <CardQrModal isopen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </>
  );
};

export default MemberCard;
