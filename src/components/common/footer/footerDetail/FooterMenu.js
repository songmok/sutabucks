import React from "react";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  const footermenu = [
    {
      name: "개인정보처리방침",
    },
    {
      name: "영상정보처리기기 운영관리 방침",
    },
    {
      name: "홈페이지 이용약관",
    },
    {
      name: "위치정보 이용약관",
    },
    {
      name: "스타벅스 카드 이용약관",
    },
    {
      name: "비회원 이용약관",
    },
    {
      name: "윤리경영 핫라인",
    },
  ];
  return (
    <>
      <ul className="fnb">
        {footermenu.map((v, i) => {
          return (
            <li className="f-list" key={i}>
              <Link to="/">{v.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FooterMenu;
