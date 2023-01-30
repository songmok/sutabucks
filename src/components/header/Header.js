import { Link } from "react-router-dom";
import logo1 from "asset/images/logo1.png";
import HeaderCss from "style/headerCss/headerCss";
import HeaderRt from "./HeaderRt/HeaderRt";
import HeaderCt from "./HeaderCt/HeaderCt";

const Header = () => {
  return (
    <div>
      <HeaderCss>
        <div className="header wrap">
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
