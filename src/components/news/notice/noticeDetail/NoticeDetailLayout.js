import instance from "api/axios";
import requests from "api/request";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NoticeDetailLayout = () => {
  const [noticeDetail, setEvNoticeDetail] = useState([]);
  const { seq } = useParams();
  const fetchData = async () => {
    const params = {
      saSeq: seq,
    };
    const resultDetail = await instance.get(requests.fetchNoticeDetail, {
      params,
    });
    setEvNoticeDetail(resultDetail.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="header">
          ss{/* <span>{noticeDetail.saSeq}</span> */}
        </div>
      </div>
    </>
  );
};

export default NoticeDetailLayout;
