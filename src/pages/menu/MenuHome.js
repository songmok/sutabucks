import PagesLink from "components/common/pagesHeader/PagesLink";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import MenuBanner from "components/menu/MenuBanner";
import React from "react";
import MenuHomeCss from "style/menuCss/menuHomeCss";

const MenuHome = () => {
  return (
    <MenuHomeCss>
      <PagesTitle title={"메뉴"} />
      <PagesLink first={"메뉴"} firstLink={"#"} count={"one"} />
      <MenuBanner />
    </MenuHomeCss>
  );
};

export default MenuHome;
