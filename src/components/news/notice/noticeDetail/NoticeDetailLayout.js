import instance from "api/axios";
import requests from "api/request";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NtDetailCss from "style/ntDetailCss/ntDetailCss";

const NoticeDetailLayout = () => {
  const [ntd, setNtd] = useState([]);

  const { seq } = useParams();
  const fetchParamsData = async () => {
    const params = {
      saSeq: seq,
    };
    const resultDetail = await instance.get(requests.fetchNoticeDetail, {
      params,
    });
    setNtd(resultDetail.data.event);
  };
  useEffect(() => {
    fetchParamsData();
  }, []);
  return (
    <>
      <NtDetailCss>
        <div className="wrap">
          <div className="header">
            <h2>{ntd.saTitle}</h2>
          </div>
          <article>
            <span> {ntd.saContent}</span>
            <img
              src={`http://haeji.mawani.kro.kr:9999/image/notice/${ntd.saUri}`}
              alt={ntd.saTitle}
            />
          </article>
        </div>
      </NtDetailCss>
    </>
  );
};

export default NoticeDetailLayout;
