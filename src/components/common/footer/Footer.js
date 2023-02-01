import React, { useEffect, useState } from "react";
import FooterCss from "style/FooterCss/footerCss";
import flogo from "asset/images/f-logo.png";
import FooterMenu from "./footerDetail/FooterMenu";
import FooterInfo from "./footerDetail/FooterInfo";

const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    document.getElementById("root")?.scrollTo(1080, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
    // className={scrollPosition > 110 ? "original_header" : "change_header"}
  }, []);

  return (
    <>
      <FooterCss>
        <footer
          className={scrollPosition !== 0 && "show-footer"}
          id={scrollPosition === 0 && "none"}
        >
          <FooterMenu />
          <div className="f-logo">
            <img src={flogo} alt="f-logo" />
          </div>
          <FooterInfo />
        </footer>
      </FooterCss>
    </>
  );
};

export default Footer;
