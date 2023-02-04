import styled from "@emotion/styled";
import { themecolor } from "utils/color";
const QrCss = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, #7373c5 0%, #4e4ee9, #09cbf1 100%);
  z-index: 10;
  .con {
    background-color: ${themecolor};
    width: 800px;
  }
  button {
    border: 1px solid white;
  }
  input {
    width: 230px;
    height: 30px;
    border-radius: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;
export default QrCss;
