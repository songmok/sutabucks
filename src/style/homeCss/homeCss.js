import styled from "@emotion/styled";
import img from "asset/images/banner.jpg";
import { logincolor, signupcolor, themecolor } from "utils/color";
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
          border: 1px solid ${themecolor};
          padding: 10px 20px;
          border-radius: 30px;
          transition: background 1s;
          &:hover {
            background-color: ${themecolor};
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
  /* 배너 컨테이너 */
  .rollingbanner {
    position: relative;
    width: 380px;
    height: 32px;
    font-size: 0.875rem;
    letter-spacing: -1px;
    padding: 7px 15px;
    box-sizing: border-box;
    background-color: #f0f0f0;
    border-radius: 16px;
  }
  /* 타이틀 */
  .rollingbanner > .title {
    font-weight: bold;
    float: left;
    padding-right: 10px;
  }
  /* 롤링 배너 */
  .rollingbanner > .wrap {
    position: relative;
    width: auto;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    .swiper {
      height: 100% !important;
    }
  }
  .cate {
    > a {
      > img {
      }
    }
  }
  .member-banner {
    background-color: #04412b;
    .member-banner-wrap {
      display: flex;
      .card-img {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 80%;
        }
      }
      .text {
        padding: 40px 0;
        padding-left: 50px;
        > * {
          color: #fff;
        }
        h3 {
          font-size: 42px;
          font-weight: bold;
          margin-bottom: 60px;
          position: relative;
        }
        p {
          span {
            display: block;
            padding-bottom: 30px;
            b {
              font-weight: bold;
              font-size: 20px;
            }
          }
        }
      }
      .member-btn {
        text-align: center;
        position: absolute;
        right: 50px;
        bottom: 48px;
        > a {
          display: block;
          border: 1px solid ${themecolor};
          padding: 10px 50px;
          border-radius: 30px;
          transition: background 1s;
          margin-bottom: 25px;
          &:last-child {
            margin: 0;
          }
          > span {
            color: #fff;
            display: block;
          }
        }
        .login {
          background-color: ${logincolor};
        }
        .signup {
          background-color: ${signupcolor};
        }
      }
    }
  }
`;
export default homeCss;
