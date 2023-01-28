import React from "react";
import { Link } from "react-router-dom";
import SubHeaderCss from "style/subHeaderCss/SubHeaderCss";

const NewsHeader = () => {
  return (
    <SubHeaderCss>
      <div className="SubHeader wrap">
        <h1 className="subHeader">새소식</h1>
        <div className="link">
          <ul>
            <li>
              <Link to="/" className="item">
                홈
              </Link>
            </li>
            <li className="arrow">{">"}</li>
            <li>
              <Link to="/news" className="item">
                새소식
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </SubHeaderCss>
  );
};

export default NewsHeader;
