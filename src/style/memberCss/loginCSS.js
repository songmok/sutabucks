import styled from "@emotion/styled";
import bgImg from "asset/images/bg.jpg";

const BgSection = styled.section`
  width: 100%;
  height: 600px;
  padding-top: 40px;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const LoginDiv = styled.div`
  width: 100%;
  max-width: 570px;
  max-height: 500px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.5);
  p {
    color: #006633;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }
  form {
    width: 100%;
    padding: 20px;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    label {
      font-weight: bold;
      margin-bottom: 5px;
    }
    input {
      border-radius: 2px;
      border: 1px solid #c6c6c6;
      padding: 5px;
      margin-bottom: 6px;
      margin-top: 12px;
      line-height: 30px;
      font-size: 13px;
      &:active,
      &:focus {
        outline: none;
      }
    }
    div {
      display: flex;
      flex-direction: row;
    }
    button {
      border: 2px solid #006633;
      border-radius: 2px;
      padding: 12px 10px;
      background-color: #006633;
      color: #fff;
      margin-top: 15px;
      margin-bottom: 40px;
      font-size: 23px;
      &:hover {
        text-decoration: underline;
        background-color: #fff;
        color: #006633;
        border: 2px solid #006633;
      }
    }
  }
`;

export { BgSection };
export default LoginDiv;
