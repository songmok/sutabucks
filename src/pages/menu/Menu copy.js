import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import instance from "../../api/axios";
import request from "../../api/request";
import MenuList from "./MenuList";
import NoResult from "./NoResult";

import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
import { Link, useParams } from "react-router-dom";

const Menu = () => {
  const { cate } = useParams();
  // const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [status, setStatus] = useState(true);

  const [bt, setBt] = useState("all");
  const [menuBt, setMenuBt] = useState([]);

  const fetchData = async () => {
    const params = {
      parentSeq: cate,
      menuName: word,
    };
    await instance
      .get(request.fetchCateSearch, {
        params,
      })
      .then((res) => {
        setSearchData(res.data.list);
        setStatus(res.data.status);
      })
      .catch((err) => {
        console.log(err);
        setStatus(err.response.data.status);
      });
    // setSearchData(resultSearchData.data.list);
    // setStatus(resultSearchData.data.status);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const cateData = async () => {
    const params = {
      parentSeq: cate,
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

  const allMenu = searchData.map((item) => (
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

  console.log(bt);

  const subMenu = searchData
    .filter((item) => item.menuCategorySeq === parseInt(bt))
    .map((item) => (
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

  console.log(searchData);
  console.log(menuBt);

  console.log(searchData);
  console.log(status);

  // const handleOnClick = () => {
  //   fetchData();
  // };
  // const handleOnKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
  //   }
  // };
  // const clearList = () => {
  //   setWord("").then(fetchData());
  // };

  return (
    <section className="container mx-auto">
      <PagesTitle title={"음식"} />
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
                  checked={bt == item.pcSeq}
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
          <div className="flex flex-wrap justify-between items-center lg:mb-7">
            {/* <form
              className="flex w-full lg:w-[35%] rounded"
              style={{ border: "1px solid #1B3C34" }}
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="search"
                className="px-5 py-2 w-4/5"
                placeholder="Search Menu"
                // required
                value={word}
                onChange={(e) => {
                  setWord(e.target.value);
                }}
                onKeyPress={handleOnKeyPress}
              />
              <button
                type="button"
                className="flex w-1/1 items-center justify-center px-4"
                onClick={handleOnClick}
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </form> */}
          </div>
          <div className="coffee mb-10">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
              {bt === "all" ? allMenu : subMenu}
            </div>
            {/* {status ? (
              <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-10">
                <MenuList searchData={searchData} />
              </div>
            ) : (
              <NoResult />
            )} */}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Menu;
