import React from "react";
import EventHeader from "components/pagesHeader/EventHeader";
import EventList from "components/news/event/EventList";

const Event = ({ event }) => {
  return (
    <>
      <EventHeader />
      <EventList event={event} />
    </>
  );
};

export default Event;
