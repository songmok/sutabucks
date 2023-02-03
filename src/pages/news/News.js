import React from "react";
import NewsItem from "components/news/NewsItem";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";

const News = () => {
  return (
    <>
      <PagesTitle title={"새소식"} />
      <PagesLink first={"새소식"} firstLink={"news"} one={"one"} />
      <NewsItem />
    </>
  );
};

export default News;
