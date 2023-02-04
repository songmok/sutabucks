import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import eventBanner from "asset/images/event-link-banner.png";
import noticeBanner from "asset/images/notice-link-banner.png";
import WOW from "wowjs";
const NewsItem = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <>
      <div className="banner-event banner wow fadeInLeft " data-wow-delay="0s">
        <img src={eventBanner} alt="" />
        <Link to="/event" className="bt-event">
          자세히 보기
        </Link>
      </div>
      <div
        className="banner-notice banner wow fadeInRight"
        data-wow-delay="0.2s"
      >
        <img src={noticeBanner} alt="" />
        <Link to="/notice" className="bt-notice">
          자세히 보기
        </Link>
      </div>
    </>
  );
};

export default NewsItem;
