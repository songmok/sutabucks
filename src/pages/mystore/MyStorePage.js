import PagesLink from "components/common/pagesHeader/PagesLink";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import MyStoreInfo from "components/mystore/MyStoreInfo";
import React from "react";

const MyStorePage = () => {
  return (
    <>
      <PagesTitle title={"My Starbucks"} />
      <PagesLink first={"해당 스타벅스 지점명"} firstLink={"bzpage"} />
      <MyStoreInfo />
    </>
  );
};

export default MyStorePage;
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
