import PagesLink from "components/common/pagesHeader/PagesLink";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import MyStoreItem from "components/mystore/MyStoreItem";
import React from "react";

const MyStoreMenu = () => {
  return (
    <>
      <PagesTitle title={"My Starbucks"} />
      <PagesLink
        first={"해당 스타벅스 지점명"}
        firstLink={"mystore"}
        second={"메뉴"}
        secondLink={"mystore/mystoremenu"}
      />
      <MyStoreItem />
    </>
  );
};

export default MyStoreMenu;
