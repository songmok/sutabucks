import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import instance from "../../api/axios";
import request from "../../api/request";
import MenuList from "./MenuList";
import NoResult from "./NoResult";

import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { cate } = useParams();
  // const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [status, setStatus] = useState(true);
  const [option, setOption] = useState("Tall");

  const handleOptionChange = (changeEvent) => {
    setOption(changeEvent.target.value);
  };

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
        setSearchData(res.data.list);
        setStatus(res.data.status);
      })
  };
  useEffect(() => {
    cateData();
  }, []);

  console.log(word);
  // console.log(searchData);
  // console.log(status);

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
      <PagesTitle title={"메뉴보기"} />
      <PagesLink first={"메뉴보기"} firstLink={"menu"} />
      <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">
        <div className="lg:col-span-1">
          {/* <div aria-label="Main Nav" className="flex flex-col space-y-1">
            <button
              className="px-4 py-2 text-start text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
            >
              <span className="text-sm font-medium">전체 메뉴</span>
            </button>
            <button
              className="px-4 py-2 text-start text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
            >
              <span className="text-sm font-medium">에스프레소</span>
            </button>
            <button
              className="px-4 py-2 text-start text-gray-500 rounded-lg hover:bg-[#1B3C34] hover:text-white"
            >
              <span className="text-sm font-medium">프라푸치노</span>
            </button>
          </div> */}
          <ul className="flex flex-col gap-2">
            <li>
              <input
                className="sr-only peer"
                type="radio"
                value="Tall"
                name="size"
                id="tall"
                checked={option === "Tall"}
                onChange={handleOptionChange}
              />
              <label
                className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-200 peer-checked:bg-[#1B3C34] peer-checked:text-white"
                htmlFor="tall"
              >
                전체보기
              </label>
            </li>
            <li>
              <input
                className="sr-only peer"
                type="radio"
                value="Grande"
                name="size"
                id="grande"
                checked={option === "Grande"}
                onChange={handleOptionChange}
              />
              <label
                className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-200 peer-checked:bg-[#1B3C34] peer-checked:text-white"
                htmlFor="grande"
              >
                Grande
              </label>
            </li>
            <li>
              <input
                className="sr-only peer"
                type="radio"
                value="Venti"
                name="size"
                id="venti"
                checked={option === "Venti"}
                onChange={handleOptionChange}
              />
              <label
                className="flex justify-center px-2 py-3 text-sm bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-200 peer-checked:bg-[#1B3C34] peer-checked:text-white"
                htmlFor="venti"
              >
                Venti
              </label>
            </li>
          </ul>
        </div>
        <main className="lg:col-span-4 ml-2">
          {/* <div className="flex flex-wrap justify-between items-center lg:mb-7">
            <form
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
            </form>
          </div> */}
          <div className="coffee mb-10">
            {status ? (
              <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-10">
                <MenuList searchData={searchData} />
              </div>
            ) : (
              <NoResult />
            )}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Menu;
