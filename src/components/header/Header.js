import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "asset/images/logo1.png";
import cartImg from "asset/images/cart.png";
import HeaderCss from "style/headerCss/HeaderCss";
import SubNews from "./SubNews";
import SubMenu from "./SubMenu";
import SubMaps from "./SubMaps";
import { useSelector } from "react-redux";
import instance from "api/axios";
import axios from "axios";
const Header = () => {
  const cartAmount = useSelector((state) => state.cart);

  // console.log(Nav[1].submenu[0].name);
  const [count, setCount] = useState(0);
  const [use, setUse] = useState([]);
  const qa = async () => {
    // 멤버목록 가져오기
    const test = await axios.get("http://haeji.mawani.kro.kr:9999/admin/list");
    setUse(test.data.member);
  };
  useEffect(() => {
    qa();
  }, []);
  const news = [
    {
      id: 1,
      name: "새소식",
      url: "/",
      sub: [
        { id: 11, name: "이벤트" },
        { id: 12, name: "공지사항" },
      ],
    },
  ];
  const menu = [
    {
      id: 2,
      name: "메뉴보기",
      url: "/menu",
      sub: [
        {
          id: 1,
          name: "음료",
          submenu: [{ menu: "커피1" }, { menu: "커피2" }, { menu: "커피3" }],
        },
        {
          id: 2,
          name: "음식",
          submenu: [{ menu: "빵1" }, { menu: "빵2" }, { menu: "빵3" }],
        },
      ],
    },
  ];
  const maps = [
    {
      id: 3,
      name: "매장찾기",
      url: "/maps",
      sub: [{ submenu: [] }],
    },
  ];
  return (
    <div>
      {/* {use.map((v) => console.log(v))} */}
      <HeaderCss>
        <div className="header-wrap">
          {/* {use.map((v) => {
            return <div className="d">{v.miName}</div>;
          })} */}
          <Link to="/" className="logo">
            <img src={logo1} alt="logo" />
          </Link>
          <div className="header-center">
            <h1 className="title">SUTABUCKS</h1>
            <nav>
              <ul className="gnb">
                {news.map((v, i) => {
                  return (
                    <li
                      className="depth1"
                      onMouseOver={() => {
                        setCount(v.id);
                      }}
                      onMouseOut={() => {
                        setCount(0);
                      }}
                      key={i}
                    >
                      <Link to={v.url}>{v.name}</Link>
                      <ul className="submenu">
                        <SubNews
                          sub={v.sub}
                          count={count}
                          setCount={setCount}
                        />
                      </ul>
                    </li>
                  );
                })}
                {menu.map((v, i) => {
                  return (
                    <li
                      className="depth1"
                      onMouseOver={() => {
                        setCount(v.id);
                      }}
                      // onMouseOut={() => {
                      //   setCount(0);
                      // }}
                      key={i}
                    >
                      <Link to={v.url}>{v.name}</Link>
                      <ul className="submenu">
                        <SubMenu
                          sub={v.sub}
                          count={count}
                          setCount={setCount}
                        />
                      </ul>
                    </li>
                  );
                })}
                {maps.map((v, i) => {
                  return (
                    <li
                      className="depth1"
                      onMouseOver={() => {
                        setCount(v.id);
                      }}
                      onMouseOut={() => {
                        setCount(0);
                      }}
                      key={i}
                    >
                      <Link to={v.url}>{v.name}</Link>
                      <ul className="submenu">
                        <SubMaps
                          sub={v.sub}
                          count={count}
                          setCount={setCount}
                        />
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="header-right-top">
              <div className="cart">
                <Link to="/cart" className="cart-link">
                  <img src={cartImg} alt="cart" />
                  <span>장바구니</span>
                  <span>_{cartAmount.totalAmount}</span>
                </Link>
              </div>
              <ul className="member">
                <li className="member-list">
                  <Link to="/login">로그인</Link>
                </li>
                <li className="member-list">
                  <Link to="/signup">회원가입</Link>
                </li>
              </ul>
            </div>
            <div className="header-right-bottom">
              <div className="order">
                <Link to="/order">
                  <span>주문하기</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </HeaderCss>
    </div>
  );
};

export default Header;
