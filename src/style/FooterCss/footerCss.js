import styled from "@emotion/styled";
import { logincolor, themecolor } from "utils/color";
import { footersize } from "utils/font";
const FooterCss = styled.div`
  #none {
    display: none;
  }
  .show-footer {
    width: 100%;
    background-color: #111;
    position: relative;
    top: 100%;
    left: 0;
    z-index: 99999;
    display: grid;
    grid-template-columns: repeat(1fr);
    a,
    span,
    p {
      color: #ccc;
      font-size: ${footersize};
    }
    .fnb {
      display: flex;
      justify-content: space-around;
      white-space: nowrap;
      padding: 30px;
      .f-list {
        position: relative;
        &:first-of-type > a {
          color: #09f550;
        }
        > a {
          &:hover {
            border-bottom: 1px solid #ccc;
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
