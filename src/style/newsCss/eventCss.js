import styled from "@emotion/styled";

const EventCss = styled.section`
  position: relative;
  .focus {
    transition: all 0.5s ease-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .title {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    h3 {
      display: block;
    }
  }
`;

export default EventCss;
