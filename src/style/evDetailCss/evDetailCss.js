import styled from "@emotion/styled";
import { footercolor } from "utils/color";
import { bigsize } from "utils/font";
const EvDetailCss = styled.section`
  position: relative;
  .wrap {
    display: flex;
    justify-content: center;
    .header {
      h2 {
        font-size: ${bigsize};
      }
    }
    .date {
      span {
      }
    }
    article {
      img {
        display: block;
      }
    }
  }
`;
export default EvDetailCss;
