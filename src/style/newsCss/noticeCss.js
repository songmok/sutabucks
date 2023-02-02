import styled from "@emotion/styled";
const NoticeCss = styled.div`
  position: relative;
  height: 100vh;
  .wrap {
    .header {
      padding: 20px;
      display: grid;
      grid-template-columns: 100px 5fr 1fr;
      border-bottom: 1px solid #ccc;
      .title {
        justify-self: center;
      }
      .date {
        justify-self: center;
      }
    }
    ul {
      li {
        padding: 30px;
        border-bottom: 1px solid black;
        display: grid;
        grid-template-columns: 100px 1150px 100px;

        a {
          span {
          }
        }
      }
    }
  }
`;

export default NoticeCss;
