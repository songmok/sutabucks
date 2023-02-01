import instance from "api/axios";
import requests from "api/request";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
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
    setEvDetail(resultDetail.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(evDetail);
  return (
    <>
      <PagesTitle title={"이벤트"} />
      <PagesLink
        first={"새소식"}
        firstLink={"news"}
        second={"이벤트"}
        secondLink={"event"}
      />
      <div className="df">{evDetail.ediSeq}</div>
    </>
  );
};

export default EventDetail;
