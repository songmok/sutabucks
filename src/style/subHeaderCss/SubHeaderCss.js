import styled from "@emotion/styled";

const SubHeaderCss = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  h1 {
    display: block;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
    padding-top: 10px;
  }
  .link {
    text-align: center;
    margin-bottom: 10px;
    ul {
      display: flex;
      justify-content: end;
      li {
        margin-right: 10px;
        font-weight: bold;
      }
      .arrow {
        align-self: center;
        font-size: 10px;
        font-weight: bold;
      }
      .items {
      }
    }
  }
`;

export default SubHeaderCss;
