import React from "react";
import { Link } from "react-router-dom";
//img
// import banner from "asset/images/banner.jpg";
import bannerHeader from "asset/images/event-header.png";
import banneritem1 from "asset/images/item1.png";
import banneritem2 from "asset/images/item2.png";
import banneritem3 from "asset/images/item3.png";
//css
import HomeCss from "style/homeCss/homeCss";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const news = [
    {
      id: 1,
      name: "새소식",
      url: "/news",
      cl: "prev",
    },
    {
      id: 2,
      name: "곰소식",
      url: "/news",
      cl: "current",
    },
    {
      id: 3,
      name: "괴소식",
      url: "/news",
      cl: "next",
    },
    {
      id: 3,
      name: "공소식",
      url: "/news",
      cl: "",
    },
    {
      id: 3,
      name: "쥐소식",
      url: "/news",
      cl: "",
    },
    {
      id: 3,
      name: "용소식",
      url: "/news",
      cl: "",
    },
  ];

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
        <div className="rollingbanner">
          <div className="title">속보</div>
          <div className="wrap">
            <Swiper
              direction={"vertical"}
              cssMode={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // touchRatio="0"
              modules={[Autoplay]}
              loop="true"
              className="mySwiper"
            >
              {news.map((v, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Link to="/news">{v.name}</Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <article className="cate"></article>
      </HomeCss>
    </>
  );
};

export default Home;
