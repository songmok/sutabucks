import React from "react";
import { Link } from "react-router-dom";
import eventBanner from "asset/images/event-link-banner.png";
import noticeBanner from "asset/images/notice-link-banner.png";
const NewsItem = () => {
  return (
    <>
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
    </>
  );
};

export default NewsItem;
