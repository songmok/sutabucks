import React, { useEffect, useState } from "react";
import cardImg from "asset/images/card.png";
import { Link, useParams } from "react-router-dom";
import requests from "api/request";
import instance from "api/axios";
const MyStoreInfo = () => {
  // const myStoreInfo = [
  //   {
  //     storeNo: 1,
  //     branch: "동성로점",
  //     addressBasic: "중구",
  //     addressDetail: "13길",
  //     openTime: "08:00:00",
  //     closeTime: "22:00:00",
  //     closeDays: "연중무휴",
  //     minOrderPrice: 5000,
  //     agent: "홍길동",
  //     businessAddress: "test",
  //     phoneNo: "010-1234-9876",
  //     minDeliveryTime: "15",
  //     maxDeliveryTime: "100",
  //   },
  // ];
  const [myStoreInfo, setMyStoreInfo] = useState([]);
  const { seq } = useParams();

  const fetchData = async () => {
    const params = {
      storeNo: seq,
    };
    const resultDetail = await instance.get(requests.fetchMyStoreInfo, {
      params,
    });
    setMyStoreInfo(resultDetail.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="my-img">
          <img src={cardImg} alt={cardImg} />
        </div>
        <div className="text">
          {myStoreInfo.map((v) => {
            return (
              <p key={v.storeNo}>
                <span>{v.branch}</span>
                <span>{v.addressBasic}</span>
                <span>{v.openTime}</span>
                <span>{v.closeTime}</span>
                <span>{v.closeDays}</span>
                <span>{v.agent}</span>
                <span>{v.phoneNo}</span>
                <span>{v.minDeliveryTime}</span>
                <span>{v.maxDeliveryTime}</span>
              </p>
            );
          })}
        </div>
        <div className="btns">
          <Link to="mystoremenu">자기 메뉴 조회하기</Link>
        </div>
      </div>
    </>
  );
};

export default MyStoreInfo;
// {
//   "status": true,
//   "message": "김철수 점주님의 지점입니다.",
//   "list": {
//       "storeNo": 1,
//       "branch": "동성로점",
//       "addressBasic": "중구",
//       "addressDetail": "13길",
//       "openTime": "08:00:00",
//       "closeTime": "22:00:00",
//       "closeDays": "연중무휴",
//       "minOrderPrice": 5000,
//       "agent": "홍길동",
//       "businessAddress": "test",
//       "phoneNo": "010-1234-9876",
//       "minDeliveryTime": "15",
//       "maxDeliveryTime": "100"
//   }
// }
