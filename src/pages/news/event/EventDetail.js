import { useParams } from "react-router-dom";

const EventDetail = ({ EventDetail }) => {
  const { seq } = useParams();
  const bookObj = EventDetail.find((item) => {
    if (item.seq === parseInt(seq)) {
      return item;
    }
  });
  return (
    <>
      <div className="SD">안녕</div>
    </>
  );
};

export default EventDetail;
