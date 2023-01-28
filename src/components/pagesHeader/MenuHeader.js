import React from "react";
import { Link } from "react-router-dom";
import SubHeaderCss from "style/subHeaderCss/SubHeaderCss";

const MenuHeader = () => {
  return (
    <>
      <SubHeaderCss>
        <div className="SubHeader wrap">
          <h1 className="subHeader">메뉴</h1>
          <div className="link">
            <ul>
              <li>
                <Link to="/" className="item">
                  홈
                </Link>
              </li>
              <li className="arrow">{">"}</li>
              <li>
                <Link to="/menu" className="item">
                  메뉴보기
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SubHeaderCss>
    </>
  );
};

export default MenuHeader;
