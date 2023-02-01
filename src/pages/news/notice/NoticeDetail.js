import React from "react";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
const NoticeDetail = ({ noticeDetail }) => {
  return (
    <>
      <PagesTitle title={"공지사항"} />
      <PagesLink
        first={"새소식"}
        firstLink={"news"}
        second={"공지사항"}
        secondLink={"notice"}
      />
    </>
  );
};

export default NoticeDetail;
