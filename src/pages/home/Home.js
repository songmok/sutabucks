import React, { useEffect } from "react";
import WOW from "wowjs";
//commponent
import HomeCss from "style/homeCss/homeCss";
import HomeRolling from "components/home/HomeRolling";
import HomeBanner from "components/home/HomeBanner";
import HomeMembers from "components/home/HomeMembers";
const Home = ({ noticeList }) => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <>
      <HomeCss>
        <HomeBanner WOW={WOW} />
        <HomeRolling noticeList={noticeList} WOW={WOW} />
        <HomeMembers WOW={WOW} />
      </HomeCss>
    </>
  );
};

export default Home;
