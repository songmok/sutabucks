import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "asset/icon/homepage-logo.png";
import cartImg from "asset/images/cart.png";
import HeaderCss from "./HeaderCss";
import SubNews from "./SubNews";
import SubMenu from "./SubMenu";
import SubMaps from "./SubMaps";
// import { set } from "immer/dist/internal";
const Header = () => {
  // console.log(Nav[1].submenu[0].name);
  const [count, setCount] = useState(0);
  // const coffe = [{ menu: "커피", id: 0, menu1: "커피2", menu2: "커피3" }];
  // const bread = [{ menu: "빵", id: 1, menu1: "빵2", menu2: "빵3" }];
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
          submenu: [{ menu: "커피1" }, { menu: "커피2" }, { menu: "커피" }],
        },
        {
          id: 2,
          name: "음식",
          submenu: [{ menu: "빵1" }, { menu: "빵2" }, { menu: "빵" }],
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
  const ne = [...news];

  console.log(ne);
  console.log(count);
  return (
    <div style={{ zIndex: 99999 }}>
      <HeaderCss>
        <div className="header-wrap">
          <Link to="/" className="logo">
            <img src={logoImg} alt="logo" />
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
