// import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import instance from "../../api/axios";
import request from "../../api/request";

import SubHeaderCss from "style/subHeaderCss/SubHeaderCss";

const Menu = () => {
  // const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  const [searchData, setSearchData] = useState([]);

  // const getPosts = async () => {
  //   const posts = await instance.get(request.fetchMenu);
  //   setData(posts.data.list);
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  const fetchData = async () => {
    const params = {
      menuName: word,
    };
    const resultSearchData = await instance.get(request.fetchMenuSearch, {
      params,
    });
    // .then()
    // .catch();
    // console.log(resultSearchData.data);
    setSearchData(resultSearchData.data.list);
    // setSearchData(resultSearchData.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const menuList = data.map((item) => (
  //   <Link
  //     // to="/menudetail"
  //     to={`/menudetail/${item.mbiSeq}`}
  //     key={item.mbiSeq}
  //     className="block group cursor-pointer"
  //   >
  //     <img
  //       // src={item.img}
  //       src="./coffee.jpg"
  //       alt="coffee"
  //       className="w-full transform hover:scale-95 transition duration-300"
  //     />
  //     <div className="relative pt-3 bg-white">
  //       <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
  //         {item.mbiName}
  //       </h3>
  //       <div className="mt-1.5 flex items-center justify-between text-gray-900">
  //         <p className="tracking-wide">{item.mbiCost}원</p>
  //       </div>
  //     </div>
  //   </Link>
  // ));

  console.log(searchData.list);

  const searchDataList = searchData.list;
  console.log(searchDataList);
  const searchMenuList = searchData.map((item) => (
    <Link
      // to="/menudetail"
      to={`/menudetail/${item.mbiSeq}`}
      key={item.mbiSeq}
      className="block group cursor-pointer"
    >
      <img
        // src={item.img}
        src="./coffee.jpg"
        alt="coffee"
        className="w-full transform hover:scale-95 transition duration-300"
      />
      <div className="relative pt-3 bg-white">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {item.mbiName}
        </h3>
        <div className="mt-1.5 flex items-center justify-between text-gray-900">
          <p className="tracking-wide">{item.mbiCost}원</p>
        </div>
      </div>
    </Link>
  ));

  const handleOnClick = () => {
    fetchData();
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  // console.log(searchData);
  return (
    <section className="container mx-auto">
      <SubHeaderCss>
        <div className="SubHeader wrap">
          <h1 className="subHeader">메뉴</h1>
          <div className="link">
            <ul>
              <li>
                <Link to="/" className="item">
                  홈
                </Link>
              </li>
              <li className="arrow">{">"}</li>
              <li>
                <Link to="/menu" className="item">
                  메뉴보기
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SubHeaderCss>
      <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">
        <div className="lg:col-span-1">
          <nav aria-label="Main Nav" className="flex flex-col space-y-1">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-[#1B3C34] hover:text-white">
                <span className="text-sm font-medium"> 음료 </span>
                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <nav
                aria-label="Users Nav"
                className="flex flex-col mt-2 ml-8 space-y-1"
              >
                <Link className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
                  콜드 브루
                </Link>
                <Link className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
                  브루드 커피
                </Link>
              </nav>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-[#1B3C34] hover:text-white">
                <span className="text-sm font-medium"> 푸드 </span>
                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <nav
                aria-label="Account Nav"
                className="flex flex-col mt-2 ml-8 space-y-1"
              >
                <Link className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
                  브레드
                </Link>
                <Link className="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white">
                  케이크
                </Link>
              </nav>
            </details>
          </nav>
        </div>
        <main className="lg:col-span-4 ml-2">
          <div className="flex flex-wrap justify-between items-center lg:mb-7">
            <h2 className="font-bold text-3xl lg:text-4xl text-[#1B3C34] mb-3 lg:mb-0">
              Menu
            </h2>
            {/* <form className="w-full lg:w-[35%]">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-[#1B3C34] dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="simple-search"
                  className="bg-gray-50 border border-[#1B3C34] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                  placeholder="Search"
                  required
                  // value={word}
                  onChange={(e) => {
                    setWord(e.target.value);
                  }}
                  onKeyPress={handleOnKeyPress}
                />
                <input type="button" value="검색" onClick={handleOnClick} />
              </div>
            </form> */}
            <div className="flex border-2 rounded">
              <input
                type="search"
                className="px-4 py-2 w-80"
                placeholder="Search Books..."
                required
                onChange={(e) => {
                  setWord(e.target.value);
                }}
                onKeyPress={handleOnKeyPress}
              />
              <button
                type="button"
                className="flex items-center justify-center px-4 border-l"
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
            </div>
          </div>
          <div className="coffee mb-10">
            <div>
              {/* <span className="font-bold text-2xl md:text-3xl">
                콜드 브루 커피
              </span> */}
            </div>
            <div className="mt-5 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
              {/* {searchData.map((item) => (
                <Link
                  // to="/menudetail"
                  to={`/menudetail/${item.mbiSeq}`}
                  key={item.mbiSeq}
                  className="block group cursor-pointer"
                >
                  <img
                    // src={item.img}
                    src="./coffee.jpg"
                    alt="coffee"
                    className="w-full transform hover:scale-95 transition duration-300"
                  />
                  <div className="relative pt-3 bg-white">
                    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {item.mbiName}
                    </h3>
                    <div className="mt-1.5 flex items-center justify-between text-gray-900">
                      <p className="tracking-wide">{item.mbiCost}원</p>
                    </div>
                  </div>
                </Link>
              ))} */}
              {searchMenuList}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Menu;
