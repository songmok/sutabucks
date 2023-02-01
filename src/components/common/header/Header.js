import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "asset/images/logo1.png";
import HeaderCss from "style/headerCss/headerCss";
import HeaderRt from "./headerRt/HeaderRt";
import HeaderCt from "./headerCt/HeaderCt";

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
    // className={scrollPosition > 110 ? "original_header" : "change_header"}
  }, []);
  return (
    <div>
      <HeaderCss>
        <div
          className={
            scrollPosition < 10 ? "original_header wrap" : "change_header wrap"
          }
        >
          <Link to="/" className="logo">
            <img src={logo1} alt="logo" />
          </Link>
          <HeaderCt />
          <HeaderRt />
        </div>
      </HeaderCss>
    </div>
  );
};

export default Header;
