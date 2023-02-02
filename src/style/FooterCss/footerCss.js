import styled from "@emotion/styled";
import { footercolor } from "utils/color";
import { minsize } from "utils/font";
const FooterCss = styled.footer`
  width: 100%;
  border: 1px solid ${footercolor};
  a,
  span,
  p {
    color: ${footercolor};
    font-size: ${minsize};
  }
  .wrap {
    display: grid;
    grid-template-columns: repeat(1fr);
    .fnb {
      display: flex;
      justify-content: space-around;
      white-space: nowrap;
      padding: 30px;
      .f-list {
        position: relative;
        &:first-of-type > a {
          color: #07af3a;
        }
        > a {
          &:hover {
            border-bottom: 1px solid ${footercolor};
          }
        }
      }
    }
    .f-logo {
      display: flex;
      justify-content: center;

      img {
        width: 30px;
        display: block;
      }
    }
    .info {
      justify-self: center;
      display: flex;
      justify-content: space-around;
      width: 900px;
      padding: 30px;
      p {
        display: block;
      }
    }
  }
`;
export default FooterCss;
