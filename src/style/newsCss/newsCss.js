import styled from "@emotion/styled";
import React from "react";
import { themecolor } from "utils/color";

const NewsCss = styled.section`
  position: relative;
  background-color: coral;
  .banner {
    position: relative;
    img {
      position: relative;
      display: block;
      width: 100%;
    }
    a {
      position: absolute;
      top: 60%;
      font-size: 30px;
      border: 1px solid ${themecolor};
      padding: 10px 20px;
      border-radius: 30px;
      transition: background 1s;
      &:hover {
        background-color: ${themecolor};
        color: #fff;
      }
    }
    .bt-event {
      color: #fff;
      left: 61.07%;
    }
    .bt-notice {
      color: #000;
      left: 21.07%;
    }
  }
`;

export default NewsCss;
