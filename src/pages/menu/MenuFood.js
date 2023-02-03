import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import instance from "../../api/axios";
import request from "../../api/request";
import MenuList from "./MenuList";
import NoResult from "./NoResult";

import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MenuFood = () => {
  // const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [status, setStatus] = useState(true);

  const [bt, setBt] = useState("all");
  const [menuBt, setMenuBt] = useState([]);

  const fetchData = async () => {
    if (bt === "all") {
      await axios
        .get(
          `http://haeji.mawani.kro.kr:9999/cate/searchmenu?parentSeq=2&menuName=`
        )
        .then((res) => {
          setSearchData(res.data.list);
          setStatus(res.data.status);
        })
        .catch((err) => {
          console.log(err);
          setStatus(err.response.data.status);
        });
    } else {
      await axios
        .get(`http://haeji.mawani.kro.kr:9999/cate/detail/menu?childSeq=${bt}`)
        .then((res) => {
          console.log(res.data.list);
          setSearchData(res.data.list);
          setStatus(res.data.status);
        })
        .catch((err) => {
          console.log(err);
          setStatus(err.response.data.status);
        });
    }
  };
  useEffect(() => {
    fetchData();
  }, [bt]);

  console.log(bt);
  console.log(searchData);

  const cateData = async () => {
    const params = {
      parentSeq: 2,
    };
    await instance
      .get(request.fetchCateSeq, {
        params,
      })
      .then((res) => {
        setMenuBt(res.data.list);
      });
  };
  useEffect(() => {
    cateData();
  }, []);

  const itemList = searchData.map((item) => (
    <Link
      to={`/menudetail/${item.menuNo}`}
      key={item.menuNo}
      className="block group cursor-pointer"
    >
      <img
        // src="./coffee.jpg"
        src={item.menuUri}
        alt="coffee"
        className="w-full transform hover:scale-95 transition duration-300"
      />
      <div className="relative pt-3 bg-white">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {item.menuName}
        </h3>
        <div className="mt-1.5 flex items-center justify-between text-gray-900">
          <p className="tracking-wide">{item.menuCost}원</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <section className="container mx-auto">
      <PagesTitle title={"메뉴보기"} />
      <PagesLink first={"메뉴보기"} firstLink={"menu"} />
      <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">
        <div className="lg:col-span-1 mr-2">
          <ul className="flex flex-col gap-2">
            <li>
              <input
                className="sr-only peer"
                type="radio"
                name="menu"
                id="all"
                checked={bt === "all"}
                value="all"
                onClick={(e) => {
                  setBt(e.target.value);
                }}
              />
              <label
                className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-200 peer-checked:bg-[#006633] peer-checked:text-white"
                htmlFor="all"
              >
                전체 메뉴
              </label>
            </li>
            {menuBt.map((item) => (
              <li key={item.pcSeq}>
                <input
                  className="sr-only peer"
                  type="radio"
                  name="menu"
                  id={item.pcName}
                  checked={parseInt(bt) === item.pcSeq}
                  value={item.pcSeq}
                  onClick={(e) => {
                    setBt(e.target.value);
                  }}
                />
                <label
                  className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-200 peer-checked:bg-[#006633] peer-checked:text-white"
                  htmlFor={item.pcName}
                >
                  {item.pcName}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <main className="lg:col-span-4 ml-2">
          <div className="coffee mb-10">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
              {itemList}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default MenuFood;
