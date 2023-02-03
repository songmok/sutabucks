import styled from "@emotion/styled";
const SignUpDiv = styled.div`
  width: 100%;
  max-width: 570px;
  padding-bottom: 50px;
  margin: 0 auto;
  div {
    padding: 20px;
    border: 1px solid #c6c6c6;
    display: flex;
    flex-direction: column;
  }
  p {
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #6c6a6a;
  }
  button {
    width: 500px;
    border: 2px solid #006633;
    border-radius: 2px;
    padding: 12px 10px;
    background-color: #006633;
    color: #fff;
    margin: 33px;
    font-size: 23px;
    &:hover {
      text-decoration: underline;
      background-color: #fff;
      color: #006633;
      border: 2px solid #006633;
    }
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    label {
      font-weight: bold;
      margin-bottom: 17px;
      font-size: 20px;
    }
    input {
      box-shadow: -3px -2px 2px -1px rgb(0 0 0 / 22%);
      border-radius: 2px;
      border: 1px solid #c6c6c6;
      padding: 5px;
      line-height: 30px;
      font-size: 15px;
      &:active,
      &:focus {
        outline: none;
      }
    }
    input[type="radio"] {
      box-shadow: none;
    }
  }
`;

export default SignUpDiv;
