import React from "react";
import { Link } from "react-router-dom";
import NewsCss from "style/newsCss/newsCss";
import SubHeaderCss from "style/subHeaderCss/SubHeaderCss";
import eventBanner from "asset/images/event-link-banner.png";
import noticeBanner from "asset/images/notice-link-banner.png";
const News = () => {
  return (
    <>
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
      <NewsCss>
        <div className="banner-event banner">
          <img src={eventBanner} alt="" />
          <Link to="/event" className="bt-event">
            자세히 보기
          </Link>
        </div>
        <div className="banner-notice banner">
          <img src={noticeBanner} alt="" />
          <Link to="/notice" className="bt-notice">
            자세히 보기
          </Link>
        </div>
      </NewsCss>
    </>
  );
};

export default News;
