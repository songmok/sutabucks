import React from "react";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";

const Maps = () => {
  return (
    <>
      <PagesTitle title={"매장찾기"} />
      <PagesLink first={"매장찾기"} firstLink={"maps"} />
      {/* <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="1920"
        height="1080"
        src="http://192.168.0.190:3000/"
      ></iframe> */}
    </>
  );
};

export default Maps;
