import styled from "@emotion/styled";
const Div = styled.div`
  width: 100%;
  max-width: 570px;
  margin: auto;
  padding: 30px;
  border: 1px solid #c6c6c6;
  display: flex;
  flex-direction: column;
  img {
    display: block;
    margin: auto;
    padding-bottom: 18px;
  }
  p {
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #6c6a6a;
  }
`;

const Err = styled.span`
  color: red;
  padding-top: 5px;
  font-size: 13px;
`;

export { Err, Div };
