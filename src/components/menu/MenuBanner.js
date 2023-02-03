import React from "react";
import drinkBanner from "asset/images/drink-link-banner.png";
import foodBanner from "asset/images/food-link-banner.png";
import { Link } from "react-router-dom";
const MenuBanner = () => {
  return (
    <>
      <div className="banner-drink banner">
        <img src={drinkBanner} alt="drink-link-banner" />
        <Link to="/menu/1" className="bt-drink">
          자세히 보기
        </Link>
      </div>
      <div className="banner-food banner">
        <img src={foodBanner} alt="food-link-banner" />
        <Link to="/menu/2" className="bt-food">
          자세히 보기
        </Link>
      </div>
    </>
  );
};

export default MenuBanner;
