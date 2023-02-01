import React from "react";
import { Link } from "react-router-dom";
//commponent
import HomeCss from "style/homeCss/homeCss";
import HomeRolling from "components/home/HomeRolling";
import HomeBanner from "components/home/HomeBanner";
import HomeMembers from "components/home/HomeMembers";
const Home = () => {
  return (
    <>
      <HomeCss>
        <HomeBanner />
        <HomeRolling />
        <HomeMembers />
      </HomeCss>
    </>
  );
};

export default Home;
