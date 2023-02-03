import PagesLink from "components/common/pagesHeader/PagesLink";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import MyStoreInfo from "components/mystore/MyStoreInfo";
import React from "react";

const MyStorePage = () => {
  return (
    <>
      <PagesTitle title={"My Starbucks"} />
      <PagesLink
        first={"해당 스타벅스 지점명"}
        firstLink={"bzpage"}
        count={"one"}
      />
      <MyStoreInfo />
    </>
  );
};

export default MyStorePage;
