import React from "react";
import { Link } from "react-router-dom";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const HomeRolling = () => {
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
    <div className="rollingbanner">
      <div className="wrap">
        <h3 className="title">새소식</h3>
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
  );
};

export default HomeRolling;
