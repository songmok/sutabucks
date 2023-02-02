import React, { useEffect, useState } from "react";
import FooterCss from "style/FooterCss/footerCss";
import flogo from "asset/images/f-logo.png";
import FooterMenu from "./footerDetail/FooterMenu";
import FooterInfo from "./footerDetail/FooterInfo";

const Footer = () => {
  return (
    <>
      <FooterCss>
        {/* 클릭시 푸터올라오기 */}
        <div className="wrap">
          <FooterMenu />
          <div className="f-logo">
            <img src={flogo} alt="f-alogo" />
          </div>
          <FooterInfo />
        </div>
      </FooterCss>
    </>
  );
};

export default Footer;
