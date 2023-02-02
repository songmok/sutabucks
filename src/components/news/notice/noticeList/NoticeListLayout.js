import React, { useState } from "react";

import { Link } from "react-router-dom";
import NoticeCss from "style/newsCss/noticeCss";

const NoticeListLayout = ({ noticeList }) => {
  // const date = [
  //   {
  //     date: "2023-02-01",
  //   },
  //   { date: "2023-01-31" },
  //   { date: "2023-01-30" },
  //   { date: "2023-01-26" },
  //   { date: "2023-01-25" },
  // ];
  return (
    <>
      <NoticeCss>
        <div className="wrap">
          <div className="header">
            <span>번호</span>
            <span className="title">제목</span>
            <span className="date">작성일</span>
          </div>
          <ul>
            {noticeList
              .slice(0)
              .reverse()
              .map((v, i) => {
                return (
                  <li key={i}>
                    <span>{v.saSeq}</span>
                    <Link to={`/noticedetail/${v.saSeq}`}>
                      <span>{v.saTitle}</span>
                    </Link>
                    <span>2017.01.23</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </NoticeCss>
    </>
  );
};

export default NoticeListLayout;
