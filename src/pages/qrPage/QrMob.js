import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import QrCss from "style/qrCss/qrCss";

const QrMob = () => {
  const coupons = ["5000", "10000", "20000", "50000"];
  const [menu, setMenu] = useState(false);
  const [coupon, setCoupon] = useState("5000");
  const memberNo = useSelector((state) => state.user.miSeq);
  console.log(memberNo);
  const [money, setMoney] = useState("");
  useEffect(() => {
    document.querySelector("header").style.display = "none";
  }, []);

  const changeText = (e) => {
    setMenu(false);
    setCoupon(e.target.textContent);
  };
  console.log();
  const chargeMoney = () => {
    setMoney();
    console.log(money);
    // http://haeji.mawani.kro.kr:9999/card/charge?memberNo=65&money=5000
    axios
      // .patch("http://haeji.mawani.kro.kr:9999/card/charge?memberNo=" + memberNo + "&money=" + money)
      .patch(
        `http://haeji.mawani.kro.kr:9999/card/charge?memberNo=84&money=${money}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <QrCss>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-[#006633] sm:text-3xl">
            충전 할 금액을 선택하세요.
          </h1>
          <div className="mt-10 space-y-4 rounded-lg p-7 shadow-2x1">
            <div className="flex flex-col">
              <div className="relative flex justify-center items-center py-3 mb-10">
                <div className="relative w-2/4" onClick={() => setMenu(!menu)}>
                  <button className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white">
                    <input
                      value={money}
                      onChange={(e) => setMoney(e.target.value)}
                    />
                  </button>
                  <svg
                    className={
                      "transform  cursor-pointer absolute top-4 right-4 " +
                      (menu ? "rotate-180" : "")
                    }
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5.75L8 10.25L12.5 5.75"
                      stroke="#27272A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div
                    className={
                      "mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " +
                      (menu ? "block" : "hidden")
                    }
                  >
                    {coupons.map((coupon) => (
                      <div
                        key={coupon}
                        className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                        onClick={changeText}
                      >
                        {coupon}
                      </div>
                    ))}
                  </div>
                </div>
                <span className="ml-3">원</span>
              </div>
              <div className="flex justify-around">
                <button
                  type="submit"
                  className="block w-1/3 rounded-lg bg-[#006633] px-5 py-3 text-sm font-medium text-white"
                  onClick={chargeMoney}
                >
                  충전
                </button>
                <button
                  type="submit"
                  className="block w-1/3 rounded-lg bg-red-400 px-5 py-3 text-sm font-medium text-white"
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </QrCss>
  );
};

export default QrMob;
