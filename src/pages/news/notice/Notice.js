import React from "react";
import { Link } from "react-router-dom";
import SubHeaderCss from "style/subHeaderCss/SubHeaderCss";
import NoticeCss from "style/newsCss/noticeCss";
const Notice = () => {
  return (
    <>
      <SubHeaderCss>
        <div className="SubHeader wrap">
          <h1 className="subHeader">공지사항</h1>
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
              <li className="arrow">{">"}</li>
              <li>
                <Link to="/notice" className="item">
                  공지사항
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SubHeaderCss>
      <NoticeCss>
        <div className="wrap">공지사항 공사중입니당</div>
      </NoticeCss>
    </>
  );
};

export default Notice;
