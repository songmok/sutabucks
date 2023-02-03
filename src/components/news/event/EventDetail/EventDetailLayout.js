import instance from "api/axios";
import requests from "api/request";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EvDetailCss from "style/evDetailCss/evDetailCss";
const EventDetailLayout = () => {
  const [evd, setEvd] = useState([]);
  const { seq } = useParams();
  const fetchData = async () => {
    const params = {
      evSeq: seq,
    };
    const resultDetail = await instance.get(requests.fetchEventDetail, {
      params,
    });
    setEvd(resultDetail.data.event);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <EvDetailCss>
        <div className="wrap">
          <div className="header">
            <h2>{evd.evTitle}</h2>
          </div>
          <div className="date">
            <span>{evd.evStartDate}</span>
            <span>{evd.evEndDate}</span>
          </div>
          <article>
            <img
              src={`http://haeji.mawani.kro.kr:9999/image/detail/${evd.evUri}`}
              alt={evd.evTitle}
            />
          </article>
        </div>
      </EvDetailCss>
    </>
  );
};

export default EventDetailLayout;
