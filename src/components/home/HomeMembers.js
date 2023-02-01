import React from "react";
import cardImg from "asset/images/card.png";
import { Link } from "react-router-dom";

const HomeMembers = () => {
  return (
    <>
      <div className="member-banner">
        <div className="member-banner-wrap wrap">
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
          </div>
          <div className="member-btn">
            <Link to="/login" className="login">
              <span>로그인</span>
            </Link>
            <Link to="/singupselect" className="signup">
              <span>회원가입</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMembers;
