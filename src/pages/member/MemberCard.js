import React, { useState } from "react";
import cardImg from "asset/images/card.png";
import CardQrModal from "./modals/CardQrModal";
import axios from "api/axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout } from "utils/layout";

const MemberCard = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);

  const btStyle = {
    border: "2px solid #006633",
    padding: "10px",
    backgroundColor: "#fff",
    color: "#006633",
    fontWeight: "bold",
    borderRadius: "10px",
  };

  const [isOpen, setIsOpen] = useState(false);

  const reviewCard = () => {
    axios
      .get("card/detail?memberNo=" + user.miSeq)
      .then((res) => {
        console.log(res.data.detail);
        setDetail(res.data.detail);
        console.log(detail);
      })
      .catch((err) => console.log(err));
  };

  const chargeCard = () => {
    setIsOpen(true);
  };

  const closeCard = () => {
    axios
      .delete("card/delete?memberNo=" + user.miSeq)
      .then((res) => {
        console.log(res);
        alert("멤버십 카드가 삭제되었습니다.");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Layout>
      <h1 className="text-2xl text-center pt-32">
        {user.miName} ({user.miNickname}) 님의{" "}
        <span className="font-semibold text-4xl text-green-800">SUTABUCKS</span>{" "}
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
            카드명: {user.miNickname} <br /> 카드잔액 : {detail.money}원
          </span>
          <button style={btStyle} onClick={reviewCard}>
            잔액조회
          </button>
          <br />
          <button style={btStyle} onClick={chargeCard}>
            충전하기
          </button>
          <br />
          <button style={btStyle} onClick={closeCard}>
            카드삭제
          </button>
          <CardQrModal isopen={isOpen} setIsOpen={setIsOpen} detail={detail} />
        </div>
      </div>
    </Layout>
  );
};

export default MemberCard;
