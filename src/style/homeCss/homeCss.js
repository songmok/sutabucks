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
  }
  .rollingbanner ul {
    list-style: none;
  }
  .rollingbanner li {
    position: absolute;
    top: -36px;
    left: 0;
  }
  /* 이전, 현재, 다음 롤링 배너 표시 */
  .rollingbanner li.prev {
    top: 36px;
    transition: top 0.5s ease;
  }
  .rollingbanner li.current {
    top: 0;
    transition: top 0.5s ease;
  }
  .rollingbanner li.next {
    top: -36px;
  }
  .rollingbanner a {
    display: block;
    display: -webkit-box;
    text-decoration: none;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #000;
  }
  /* 반대 방향으로 진행 */
  .rollingbanner.reverse li.prev {
    top: -36px;
    transition: top 0.5s ease;
  }
  .rollingbanner.reverse li.next {
    top: 36px;
  }
  .cate {
    > a {
      > img {
      }
    }
  }
`;
export default homeCss;
