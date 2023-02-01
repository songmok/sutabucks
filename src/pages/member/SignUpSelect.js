import React from "react";
import { Link } from "react-router-dom";
import SignUpSelectCss from "style/memberCss/signUpSeletCss";

const SignUpSelect = () => {
  return (
    <>
      <SignUpSelectCss>
        <div className="select wrap">
          <Link to="/signup" className="member box">
            <div className="textbox mb">
              <span>일반회원</span>
              <span>회원가입</span>
            </div>
          </Link>
          <Link to="/bzsignup" className="buz box">
            <div className="textbox bz">
              <span>점주</span>
              <span>회원가입</span>
            </div>
          </Link>
        </div>
      </SignUpSelectCss>
    </>
  );
};

export default SignUpSelect;
