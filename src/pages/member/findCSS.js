import styled from "@emotion/styled";
const FindDiv = styled.div`
  width: 100%;
  max-width: 570px;
  max-height: 500px;
  margin: 0 auto;
  p {
    color: #006633;
    font-weight: 500;
    font-size: 20px;
  }
  form {
    width: 100%;
    padding: 35px;
    margin-bottom: 17px;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03);
    border: 1px solid #959595;
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
      margin-bottom: 15px;
      line-height: 30px;
      font-size: 13px;
      &:active,
      &:focus {
        outline: none;
      }
    }
  }
`;

const Bt = styled.button`
  width: 520px;
  border: 2px solid #006633;
  border-radius: 2px;
  padding: 12px 10px;
  background-color: #006633;
  color: #fff;
  margin-top: 15px;
  margin-bottom: 50px;
  font-size: 23px;
  &:hover {
    text-decoration: underline;
    background-color: #fff;
    color: #006633;
    border: 2px solid #006633;
  }
`;

export { Bt };
export default FindDiv;
