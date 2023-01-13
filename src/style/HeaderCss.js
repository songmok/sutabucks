import styled from "@emotion/styled";
const HeaderCss = styled.header`
  width: 100%;
  height: 200px;
  background-color: #1b3c34;
  * {
    color: #fff;
    font-weight: bold;
  }
  .header-wrap {
    position: relative;
    margin: 0 auto;
    width: 1440px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .logo {
      width: 100px;
      height: 100px;
      display: block;
      margin-left: 20px;
      align-self: center;
      img {
        display: block;
        width: 100%;
      }
    }
    .header-center {
      justify-self: center;
      align-self: center;
      .title {
        font-size: 4.06rem;
        display: block;
        margin-bottom: 42px;
      }
    }
    nav {
      .gnb {
        display: flex;
        justify-content: space-between;
        .depth1 {
          a {
            font-size: 1.25rem;
            font-weight: bold;
          }
        }
      }
    }
    .header-right {
      padding-top: 30px;
      justify-self: right;
      margin-right: 30px;
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
