import React from "react";
import { useState } from "react";
import MapsGnb from "./subMaps/MapsGnb";
import MenuGnb from "./subMenu/MenuGnb";
import NewsGnb from "./subNews/NewsGnb";

const HeaderCt = () => {
  const [count, setCount] = useState(0);
  const news = [
    {
      id: 1,
      name: "새소식",
      url: "/news",
      sub: [
        {
          id: 11,
          name: "이벤트",
          url: "/event",
          submenu: [],
        },
        {
          id: 12,
          name: "공지사항",
          url: "/notice",
          submenu: [],
        },
        {
          id: 13,
          name: "매장별 이벤트",
          url: "/",
          submenu: [{ menu: "일반 매장" }, { menu: "신규 매장" }],
        },
        {
          id: 13,
          name: "월페이퍼",
          url: "/",
          submenu: [{ menu: "" }, { menu: "" }],
        },
        {
          id: 14,
          name: "캠페인",
          url: "/",
          submenu: [],
        },
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
          url: "/menu/1",
          submenu: [
            { menu: "에스프레소", url: "/menu/1" },
            { menu: "프라푸치노", url: "/menu/1" },
            { menu: "콜드브루", url: "/menu/1" },
            { menu: "브루드", url: "/menu/1" },
            { menu: "블렌디드", url: "/menu/1" },
            { menu: "기타 제조 음료", url: "/menu/1" },
          ],
        },
        {
          id: 2,
          name: "음식",
          url: "/menu/2",
          submenu: [
            { menu: "케이크", url: "/menu/2" },
            { menu: "샌드위치 & 샐러드", url: "/menu/2" },
            { menu: "브레드", url: "/menu/2" },
            { menu: "과일 & 요거트", url: "/menu/2" },
            { menu: "아이스크림", url: "/menu/2" },
          ],
        },
        {
          id: 3,
          name: "상품",
          url: "",
          submenu: [
            { menu: "머그", url: "#" },
            { menu: "글라스", url: "#" },
            { menu: "플라스틱 텀블러", url: "#" },
            { menu: "스테인리스 텀블러", url: "#" },
            { menu: "보온병", url: "#" },
            { menu: "액세서리", url: "#" },
            { menu: "선물세트", url: "#" },
          ],
        },
        {
          id: 4,
          url: "",
          name: "카드",
          submenu: [
            { menu: "실물카드", url: "#" },
            { menu: "e-Gift", url: "#" },
          ],
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
    <>
      <div className="header-center">
        <h1 className="title">SUTABUCKS</h1>
        <nav>
          <ul className="gnb">
            <NewsGnb news={news} count={count} setCount={setCount} />
            <MenuGnb menu={menu} count={count} setCount={setCount} />
            <MapsGnb maps={maps} count={count} setCount={setCount} />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HeaderCt;
