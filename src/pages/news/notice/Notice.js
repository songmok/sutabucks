import React from "react";

import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
import NoticeListLayout from "components/news/notice/noticeList/NoticeListLayout";

const Notice = () => {
  return (
    <>
      <PagesTitle title={"공지사항"} />
      <PagesLink
        first={"새소식"}
        firstLink={"news"}
        second={"공지사항"}
        secondLink={"notice"}
      />
      <NoticeListLayout />
    </>
  );
};

export default Notice;
