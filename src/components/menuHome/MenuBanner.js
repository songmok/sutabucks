import React, { useEffect } from "react";
import drinkBanner from "asset/images/drink-link-banner.png";
import foodBanner from "asset/images/food-link-banner.png";
import { Link } from "react-router-dom";
import WOW from "wowjs";
const MenuBanner = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <>
      <div className="banner-drink banner wow fadeInLeft" data-wow-delay="0s">
        <img src={drinkBanner} alt="drink-link-banner" />
        <Link to="/menu/cate?seq=1" className="bt-drink">
          자세히 보기
        </Link>
      </div>
      <div className="banner-food banner wow fadeInRight" data-wow-delay="0.2s">
        <img src={foodBanner} alt="food-link-banner" />
        <Link to="/menu/cate?seq=2" className="bt-food">
          자세히 보기
        </Link>
      </div>
    </>
  );
};

export default MenuBanner;
