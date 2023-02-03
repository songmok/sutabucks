import styled from "@emotion/styled";
import { themecolor } from "utils/color";
import { midllesize } from "utils/font";

const MenuHomeCss = styled.section`
  position: relative;
  .banner {
    position: relative;
    img {
      position: relative;
      display: block;
      width: 100%;
    }
    a {
      position: absolute;
      top: 65%;
      font-size: ${midllesize};
      border: 1px solid ${themecolor};
      padding: 10px 20px;
      border-radius: 30px;
      transition: background 1s;
      &:hover {
        background-color: ${themecolor};
        color: #fff;
      }
    }
    .bt-drink {
      color: #fff;
      left: 61.07%;
    }
    .bt-food {
      color: #000;
      left: 21.07%;
    }
  }
`;

export default MenuHomeCss;
