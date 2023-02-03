import React from "react";
import NewsItem from "components/news/NewsItem";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
import NewsCss from "style/newsCss/newsCss";

const News = () => {
  return (
    <>
      <NewsCss>
        <PagesTitle title={"새소식"} />
        <PagesLink first={"새소식"} firstLink={"news"} count={"one"} />
        <NewsItem />
      </NewsCss>
    </>
  );
};

export default News;
