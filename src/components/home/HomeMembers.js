import React, { useState } from "react";
import cardImg from "asset/images/card.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardModal from "pages/member/modals/CardModal";
const HomeMembers = () => {
  const user = useSelector((state) => state.user);
  const [isCard, setIsCard] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeAccount = () => {
    setIsOpen(true);
  };
  const closeCard = () => {
    setIsCard(true);
  };
  return (
    <>
      <div className="member-banner">
        <div className="member-banner-wrap wrap">
          {user.miSeq === "" ? (
            <>
              <div className="card-img">
                <img src={cardImg} alt={cardImg} />
              </div>
              <div className="text">
                <h3>스타벅스 멤버십 카드</h3>
                <p>
                  <span>
                    <b>스타벅스 회원이세요?</b> 로그인을 통해 멤버십 카드를
                    확인해보세요.
                  </span>
                  <span>
                    <b>스타벅스 회원이 아니세요?</b> 가입을 통해 멤버십 카드를
                    사용해보세요.
                  </span>
                </p>
                <div className="member-btn">
                  <Link to="/login" className="login">
                    <span>로그인</span>
                  </Link>
                  <Link to="/singupselect" className="signup">
                    <span>회원가입</span>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="card-img">
                <img src={cardImg} alt={cardImg} />
              </div>
              <div className="text">
                <h3>스타벅스 멤버십 카드</h3>
                <p>
                  <span>
                    <b>멤버십 카드가 없으세요? </b> 링크를 통해 멤버십 카드를
                    생성해보세요!
                  </span>
                  <span>
                    <b>멤버십 카드의 잔액이 궁금하다면?</b> 링크를 통해 멤버십
                    카드 잔액을 조회 해보세요!
                  </span>
                </p>
                <div className="member-btn">
                  <button className="btStyle" onClick={closeCard}>
                    멤버십 카드
                  </button>
                  <CardModal isopen={isCard} setIsOpen={setIsCard} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeMembers;
