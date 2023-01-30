import instance from "api/axios";
import requests from "api/request";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EventDetail = ({ eventDetail }) => {
  // const { seq } = useParams();

  // const ev = eventDetail.find((item) => {
  //   if (item.ediSeq === parseInt(seq)) {
  //     return item;
  //   }
  // });
  // const fetchData = async () => {
  //   const params = {
  //     ediseq: seq,
  //   };
  //   const resultDetail = await instance.get(requests.fetchMenuDetail, {
  //     params,
  //   });
  //   setDetail(resultDetail.data.detail);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log(eventDetail);
  return (
    <>
      <div className="df"></div>
    </>
  );
};

export default EventDetail;
