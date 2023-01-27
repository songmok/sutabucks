import styled from "@emotion/styled";
import img from "asset/images/banner.jpg";
const homeCss = styled.section`
  position: relative;
  .event {
    width: 100%;
    height: 34vw;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    .event-wrap {
      height: 34vw;
      .event-h {
        position: absolute;
        top: 25%;
        float: left;
        text-align: center;
        > img {
          padding-bottom: 25%;
        }
        > a {
          border: 1px solid #046241;
          padding: 10px 20px;
          border-radius: 30px;
          transition: background 1s;
          &:hover {
            background-color: #046241;
            color: #fff;
          }
        }
      }
      .items {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 70%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: flex-end;
        > img {
          /* display: block; */
          left: 50%;
          top: 50%;
          width: 90%;
        }
        .item3 {
          align-self: center;
        }
      }
    }
  }
  .notice {
    position: relative;
    height: 50px;
    background-color: #000;
    > * {
      color: #fff;
    }
    .notice-wrap {
      .notice-list {
        display: grid;
        width: 450px;
        height: 50px;
        background-color: blue;
        grid-template-columns: repeat(3, 1fr);
        justify-items: end;
        align-items: center;
        > h3 {
          justify-self: start;
          font-weight: bold;
          font-size: 30px;
        }
        .notice-items {
          position: relative;
          justify-self: center;
          height: 16px;
          > span {
            position: absolute;
            white-space: nowrap;
            top: 0;
            z-index: 1;
            &::after {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 16px;
              background-color: red;
              z-index: -1;
            }
          }
        }
        .plus-box {
          width: 30px;
          height: 30px;
          border-radius: 30px;
          background-color: #fff;
          display: block;
        }
      }
    }
  }
  .cate {
    > a {
      > img {
      }
    }
  }
`;
export default homeCss;
