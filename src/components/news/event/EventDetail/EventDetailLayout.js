import instance from "api/axios";
import requests from "api/request";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const EventDetailLayout = () => {
  const [evDetail, setEvDetail] = useState([]);
  const { seq } = useParams();
  const fetchData = async () => {
    const params = {
      ediSeq: seq,
    };
    const resultDetail = await instance.get(requests.fetchEventDetail, {
      params,
    });
    setEvDetail(resultDetail.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="header">
          <span>{evDetail.title}</span>
        </div>
        <span>{evDetail.ediSeq}</span>
      </div>
    </>
  );
};

export default EventDetailLayout;
