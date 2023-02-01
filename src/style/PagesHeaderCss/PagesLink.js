import styled from "@emotion/styled";

const PagesLinkCss = styled.div`
  text-align: center;
  margin-bottom: 10px;
  ul {
    display: flex;
    justify-content: end;
    .none {
      display: none;
    }
    li {
      margin-right: 10px;
      font-weight: bold;
      &:last-child {
        margin: 0;
      }
    }
    .arrow {
      align-self: center;
      font-size: 10px;
      font-weight: bold;
    }
    .items {
    }
  }
`;

export default PagesLinkCss;
