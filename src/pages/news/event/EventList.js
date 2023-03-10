import React from "react";
import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
import EventListLayout from "components/news/event/eventList/EventListLayout";

const EventList = ({ eventList }) => {
  return (
    <>
      <PagesTitle title={"이벤트"} />
      <PagesLink
        first={"새소식"}
        firstLink={"/news"}
        second={"이벤트"}
        secondLink={"#"}
        count={"two"}
      />
      <EventListLayout eventList={eventList} />
    </>
  );
};

export default EventList;
