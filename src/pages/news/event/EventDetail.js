import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
import EventDetailLayout from "components/news/event/eventDetail/EventDetailLayout";

const EventDetail = () => {
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
      <EventDetailLayout />
    </>
  );
};

export default EventDetail;
