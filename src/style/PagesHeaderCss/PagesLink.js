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
      .gray {
        color: #7e7b7b;
        /* display: none; */
      }
      .black {
        color: #000;
      }
      &:last-child {
        margin: 0;
      }
    }
    .arrow {
      align-self: center;
      font-size: 10px;
      font-weight: bold;
    }
    .item {
    }
  }
`;

export default PagesLinkCss;
