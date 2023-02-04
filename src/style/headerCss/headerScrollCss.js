import styled from "@emotion/styled";
import { ordercolor, themecolor, themeheadercolor } from "utils/color";
import {
  bigsize,
  defaltsize,
  headertitle,
  midllesize,
  minsize,
} from "utils/font";
const HeaderScrollCss = styled.section`
  position: relative;
  width: 100%;
  height: 200px;
  z-index: 9999;
  background-color: ${themeheadercolor};
  .change_wrap {
    position: fixed;
    background-color: ${themeheadercolor};
    width: 100%;
    height: 100px;
    left: 0;
    top: 0;
    display: block;
    animation-name: head;
    animation-duration: 400ms;
    @keyframes head {
      0% {
        opacity: 0;
        top: -100px;
      }
      100% {
        height: 100px;
        opacity: 1;
        display: block;
      }
    }
    * a {
      color: #faf8f8;
      font-weight: bold;
    }
    .wrap {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      position: static;
      .logo {
        display: flex;
        align-self: center;
        width: 70px;
        > img {
          align-self: center;
          display: block;
        }
      }
      .header-center {
        justify-self: center;
        text-align: center;
        align-self: end;
        .title {
          display: none;
        }
        nav {
          padding-right: 10px;
          .gnbsr {
            display: flex;
            .depth1 {
              display: flex;
              justify-content: center;
              align-items: center;
              width: calc(620px / 3);
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
                padding: 20px 65px;
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
                          font-weight: bold;
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
        padding-top: 53px;
        justify-self: right;
        .header-right-top {
          display: flex;
          align-items: center;
          gap: 25px;
          .cart {
            .cart-link {
              display: flex;
              align-items: center;
              > svg {
                width: 20px;
                display: block;
              }
              > span {
                font-size: ${minsize};
              }
            }
          }
          .member {
            display: flex;
            justify-content: space-between;
            .member-list {
              position: relative;
              color: #fff;
              &:nth-of-type(1) {
                margin-right: 23px;
                &::after {
                  content: "";
                  position: absolute;
                  top: 4px;
                  right: -12px;
                  transform: translateX(50%);
                  width: 2px;
                  height: 18px;
                  background-color: #fff;
                }
              }
              a {
                &:hover strong {
                  border-bottom: 1px solid #ccc;
                }
                strong {
                  white-space: nowrap;
                  font-size: ${midllesize} !important;
                  display: inline-block;
                }
              }
              > a {
                display: block;
                font-size: ${defaltsize};
              }
              &:hover button {
                color: red;
              }
              button {
                margin-top: 4px;
              }
            }
            .member-lists {
              position: relative;
              top: 2px;
              &:nth-of-type(1) {
                margin-right: 30px;
                &::after {
                  content: "";
                  position: absolute;
                  top: 0px;
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
      }
    }
  }
`;
export default HeaderScrollCss;
