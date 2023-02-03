import React from "react";
import { Link } from "react-router-dom";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const HomeRolling = ({ noticeList }) => {
  return (
    <div className="rollingbanner">
      <div className="wrap">
        <h3 className="title">새소식</h3>
        <Swiper
          direction={"vertical"}
          cssMode={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop="true"
          className="mySwiper"
        >
          {noticeList
            .slice(0)
            .reverse()
            .map((v, i) => {
              return (
                <SwiperSlide key={i}>
                  <Link to={`/noticedetail/${v.saSeq}`}>
                    <span>{v.saTitle}</span>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeRolling;
