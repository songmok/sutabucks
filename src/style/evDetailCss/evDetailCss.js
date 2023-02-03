import styled from "@emotion/styled";
import { footercolor } from "utils/color";
import { bigsize, midllesize } from "utils/font";
const EvDetailCss = styled.section`
  position: relative;
  .wrap {
    display: grid;
    grid-template-columns: 100%;
    justify-content: center;
    .header {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      padding: 30px;
      text-align: left;
      margin-bottom: 60px;
      display: flex;
      .date {
        display: flex;
        > span {
          margin-left: 10px;
          align-self: center;
        }
      }

      h2 {
        font-size: ${bigsize};
      }
    }
    article {
      text-align: left;
      display: grid;
      img {
        justify-self: center;
        display: block;
      }
      > span {
        padding: 0 30px;
        font-size: ${midllesize};
        letter-spacing: 2px;
        justify-self: center;
        margin-bottom: 60px;
      }
    }
  }
`;
export default EvDetailCss;
