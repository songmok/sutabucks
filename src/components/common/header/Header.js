import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "asset/images/logo1.png";
import HeaderCss from "style/headerCss/HeaderCss";
import HeaderScrollCss from "style/headerCss/headerScrollCss";
import HeaderRt from "./headerRt/HeaderRt";
import HeaderCt from "./headerCt/HeaderCt";
import WOW from "wowjs";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    document.getElementById("root")?.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <>
      {scrollPosition < 100 ? (
        <HeaderCss>
          <div className="original_header wrap">
            <Link to="/" className="logo">
              <img src={logo1} alt="logo" />
            </Link>
            <HeaderCt scrollPosition={scrollPosition} WOW={WOW} />
            <HeaderRt scrollPosition={scrollPosition} WOW={WOW} />
          </div>
        </HeaderCss>
      ) : (
        <HeaderScrollCss>
          <div className="change_wrap">
            <div className="wrap">
              <Link to="/" className="logo">
                <img src={logo1} alt="logo" />
              </Link>
              <HeaderCt scrollPosition={scrollPosition} />
              <HeaderRt scrollPosition={scrollPosition} />
            </div>
          </div>
        </HeaderScrollCss>
      )}
    </>
  );
};

export default Header;
