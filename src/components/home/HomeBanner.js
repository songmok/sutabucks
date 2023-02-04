import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// images
import bannerHeader from "asset/images/event-header.png";
import banneritem1 from "asset/images/item1.png";
import banneritem2 from "asset/images/item2.png";
import banneritem3 from "asset/images/item3.png";
const HomeBanner = ({ WOW }) => {
  return (
    <div className="event">
      <div className="event-wrap wrap">
        <div className="event-h">
          <img
            src={bannerHeader}
            alt="배너배경"
            className="wow fadeInLeft"
            data-wow-delay="1.5s"
          />
          <Link to="/menu/cate?seq=1">자세히 보기</Link>
        </div>
        <div className="items">
          <img
            src={banneritem1}
            alt="음료1"
            className="item1 wow flipInY"
            data-wow-delay="0s"
          />
          <img
            src={banneritem2}
            alt="음료2"
            className="item2 wow flipInY"
            data-wow-delay="0.5s"
          />
          <img
            src={banneritem3}
            alt="음료3"
            className="item3 wow flipInY"
            data-wow-delay="1s"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
