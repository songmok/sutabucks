import instance from "api/axios";
import requests from "api/request";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  // const { seq } = useParams();
  const [evDetail, setEvDetail] = useState([]);
  const { seq } = useParams();

  const fetchData = async () => {
    const params = {
      ediSeq: seq,
    };
    const resultDetail = await instance.get(requests.fetchEventDetail, {
      params,
    });
    setEvDetail(resultDetail.event);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(evDetail);
  return (
    <>
      <div className="df">{evDetail}ss</div>
    </>
  );
};

export default EventDetail;
