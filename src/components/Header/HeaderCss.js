import styled from "@emotion/styled";
const HeaderCss = styled.header`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #1b3c34;
  display: flex;
  justify-content: center;
  z-index: 9999;
  /* padding-bottom: 200px; */
  \ * {
    color: red !important;
    font-weight: bold;
  }
  .header-wrap {
    width: 1440px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .logo {
      width: 100px;
      height: 100px;
      display: block;
      align-self: center;
      img {
        display: block;
        width: 100%;
      }
    }
    .header-center {
      justify-self: center;
      text-align: center;
      .title {
        align-self: center;
        font-size: 4.06rem;
        display: block;
        padding-top: 30px;
        margin-bottom: 32px;
      }
      nav {
        /* padding-top: 0px; */
        .gnb {
          display: flex;
          .depth1 {
            display: block;
            text-align: center;
            width: calc(480px / 3);
            background-color: #1e20c5;
            /* height: 70px; */
            a {
              padding-top: 10px;
              padding-bottom: 43px;
              display: block;
              font-size: 1.25rem;
              font-weight: bold;
            }
            /* &:nth-child(2) > .depth1-wrap {
            display: none;
          } */
            .depth1-wrap {
              width: 100%;
              height: 120px;
              position: absolute;
              background-color: #999;
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
                    height: 120px;
                    opacity: 1;
                    display: block;
                  }
                }
              }
              &.active2 {
                display: block;
              }
              &.active3 {
                display: block;
              }
              .submenu {
                width: 1440px;
                .depth2 {
                  position: relative;
                  width: 200px;
                  float: left;
                }
              }
            }
          }
        }
      }
    }
    .header-right {
      padding-top: 30px;
      justify-self: right;
      .header-right-top {
        display: flex;
        align-items: center;
        gap: 40px;
        .cart {
          .cart-link {
            display: flex;
            align-items: center;
            img {
              height: 20px;
              display: block;
            }
            span {
              font-size: 1em;
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
            a {
              display: block;
              font-size: 1em;
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
          border-radius: 30px;
          position: relative;
          background-color: #bf170c;
          a {
            width: 100%;
            height: 100%;
            font-size: 1.5em;
            display: block;
            span {
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
export default HeaderCss;
