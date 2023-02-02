import React, { useEffect, useState } from "react";
import FooterCss from "style/FooterCss/footerCss";
import flogo from "asset/images/f-logo.png";
import FooterMenu from "./footerDetail/FooterMenu";
import FooterInfo from "./footerDetail/FooterInfo";
import { render } from "react-dom";

const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    document.querySelector("body")?.scrollTo(1080, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    window.addEventListener("mount", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
    // className={scrollPosition > 110 ? "original_header" : "change_header"}
  }, []);
  const show = parseInt(
    document.querySelector("body").offsetHeight - window.innerHeight
  );

  console.log(show);
  console.log(scrollPosition);

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
