import styled from "@emotion/styled";

import { logincolor, signupcolor } from "utils/color";
const SignUpSelectCss = styled.div`
  position: relative;
  .select {
    padding-top: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .box {
      width: 500px;
      height: 500px;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      .textbox {
        text-align: center;
        span {
          color: #fff;
          font-size: 64px;
          font-weight: bold;
          padding: 10px;
          display: block;
        }
      }
    }
    .member {
      background-color: ${logincolor};
    }
    .buz {
      background-color: ${signupcolor};
    }
  }
`;

export default SignUpSelectCss;
