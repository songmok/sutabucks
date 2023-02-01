import React from "react";
import { Link } from "react-router-dom";
// images
import bannerHeader from "asset/images/event-header.png";
import banneritem1 from "asset/images/item1.png";
import banneritem2 from "asset/images/item2.png";
import banneritem3 from "asset/images/item3.png";
const HomeBanner = () => {
  return (
    <div className="event">
      <div className="event-wrap wrap">
        <div className="event-h">
          <img src={bannerHeader} alt="" />
          <Link to="">자세히 보기</Link>
        </div>
        <div className="items">
          <img src={banneritem1} alt="" className="item1" />
          <img src={banneritem2} alt="" className="item2" />
          <img src={banneritem3} alt="" className="item3" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
