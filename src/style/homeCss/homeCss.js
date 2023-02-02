import styled from "@emotion/styled";
import img from "asset/images/banner.jpg";
import SignUp from "pages/member/SignUp";
import { logincolor, signupcolor, themecolor } from "utils/color";
import { midllesize } from "utils/font";
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
    width: 100%;
    height: 50px;
    font-size: 0.875rem;
    letter-spacing: -1px;
    background-color: black;
    .wrap {
      width: 420px;
      height: 100%;
      padding: 17px;
      border: 1px solid #999;
      border-radius: 2px;
      .title {
        font-weight: bold;
        color: #fff;
        float: left;
        padding-right: 10px;
      }
      .swiper {
        height: 100% !important;
        a {
          color: #fff;
        }
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
          border-radius: 10px;
          border: 1px solid black;
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
          font-size: 2.625rem;
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
              font-size: ${midllesize};
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
          border: 1px solid black;
          padding: 10px 50px;
          border-radius: 30px;
          margin-bottom: 25px;
          &:last-child {
            margin: 0;
          }
          > span {
            color: #fff;
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
