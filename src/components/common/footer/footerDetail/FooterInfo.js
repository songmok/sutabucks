import React from "react";
import { Link } from "react-router-dom";

const FooterInfo = () => {
  return (
    <>
      <div className="info">
        <p>
          <span>사업자등록번호 : </span>
          <span>201-81-21515</span>
        </p>
        <p>
          <span>주식회사 에스씨케이컴퍼니 대표이사 : </span>
          <span>손정현</span>
        </p>
        <p>
          <a href="tel:1522-3232">
            <span>TEL : </span>
            <span>1522-3232</span>
          </a>
        </p>
        <p>
          <span>개인정보 책임자 : </span>
          <span>이현수</span>
        </p>
      </div>
    </>
  );
};

export default FooterInfo;
