import styled from "@emotion/styled";
import { ordercolor, themecolor, themeheadercolor } from "utils/color";
import { bigsize, defaltsize, headertitle, minsize } from "utils/font";

const headerCss = styled.header`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: ${themeheadercolor};
  z-index: 9999;
  * {
    color: #fff;
    font-weight: bold;
  }
  .change_header {
    display: none;
  }
  .original_header {
    position: static;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
    .logo {
      width: 100px;
      display: block;
      align-self: center;
      > img {
        display: block;
        width: 100%;
      }
    }
    .header-center {
      justify-self: center;
      text-align: center;
      .title {
        align-self: center;
        font-size: ${headertitle};
        display: block;
        padding-top: 30px;
        padding-bottom: 45px;
      }
      nav {
        .gnb {
          display: flex;
          .depth1 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: calc(420px / 3);
            height: 100%;
            &:last-child {
              margin: 0;
            }
            &:hover {
              background-color: #333333;
            }
            &.maps:hover {
              background-color: ${themecolor};
            }
            > a {
              padding: 20px 32px;
              display: block;
              font-size: 1.25rem;
            }
            .depth1-wrap {
              width: 100%;
              height: 220px;
              position: absolute;
              background-color: rgba(0, 0, 0, 0.8);
              left: 0;
              top: 100%;
              display: none;
              justify-content: center;

              &.active {
                display: block;
                animation-name: opacity;
                animation-duration: 500ms;
                @keyframes opacity {
                  0% {
                    height: 0;
                    opacity: 0;
                    display: none;
                  }
                  100% {
                    z-index: 999;
                    height: 220px;
                    opacity: 1;
                    display: block;
                  }
                }
              }
              .submenu {
                position: relative;
                margin: 0 auto;
                width: 1440px;
                padding-top: 5px;
                display: flex;
                justify-content: space-around;
                a {
                  position: relative;
                  display: block;
                  &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -2px;
                    width: 0;
                    height: 1px;
                    background-color: #cdd9d7;
                    transition: all 0.3s;
                  }
                  &:hover::after {
                    content: "";
                    width: 100%;
                  }
                }
                .depth2 {
                  position: relative;
                  height: 100%;
                  width: 100px;
                  text-align: left;
                  > a {
                    display: inline-block;
                    font-size: 16px;
                    margin-bottom: 5px;
                    margin-top: 7px;
                  }
                  .depth2-sub {
                    .sub-list {
                      height: calc((100px - 25px) / 3);
                      display: flex;
                      align-items: center;
                      justify-content: left;
                      > a {
                        font-size: ${minsize};
                        color: rgba(255, 255, 255, 0.6);
                        font-weight: bol;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .header-right {
      padding-top: 35px;
      justify-self: right;
      .header-right-top {
        display: flex;
        align-items: center;
        gap: 40px;
        .cart {
          .cart-link {
            display: flex;
            align-items: center;
            > img {
              height: 20px;
              display: block;
            }
            > span {
              font-size: ${defaltsize};
            }
          }
        }
        .member {
          display: flex;
          justify-content: space-between;
          .member-list {
            position: relative;
            &:nth-of-type(1) {
              margin-right: 30px;
              &::after {
                content: "";
                position: absolute;
                top: 0;
                right: -15px;
                transform: translateX(50%);
                width: 2px;
                height: 18px;
                background-color: #fff;
              }
            }
            > a {
              display: block;
              font-size: ${defaltsize};
            }
          }
        }
      }
      .header-right-bottom {
        display: flex;
        justify-content: right;
        padding-top: 43px;
        .order {
          width: 145px;
          height: 50px;
          border-radius: 5px;
          position: relative;
          background-color: ${ordercolor};
          border: 1px solid #999;
          > a {
            font-size: ${bigsize};
            width: 100%;
            height: 100%;
            display: block;
            > span {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              display: block;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
`;
export default headerCss;
