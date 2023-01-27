import React from "react";
import banner from "asset/images/banner.jpg";
import bannerHeader from "asset/images/event-header.png";
import banneritem1 from "asset/images/item1.png";
import banneritem2 from "asset/images/item2.png";
import banneritem3 from "asset/images/item3.png";
import { Link } from "react-router-dom";
import HomeCss from "style/homeCss/homeCss";
const Home = () => {
  return (
    <>
      <HomeCss>
        <article className="event">
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
        </article>
        <article className="notice">
          <div className="notice-wrap wrap">
            <div className="notice-list">
              <h3>공지사항</h3>
              <div className="notice-items">
                <span style={{}} id="item">
                  커피의 효능
                </span>
                <span style={{}} id="item">
                  스타벅스만의 비법
                </span>
                <span style={{}} id="item">
                  맛없을 시 100% 환불!!
                </span>
              </div>
              <span className="plus-box"></span>
            </div>
          </div>
        </article>
        <article className="cate"></article>
      </HomeCss>
    </>
  );
};

export default Home;
