import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import instance from "../../../api/axios";
import request from "../../../api/request";

import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
import MenuBt from "./MenuBt";
import MenuItem from "../ui/MenuItem";
import WOW from "wowjs";

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [status, setStatus] = useState(true);

  const [bt, setBt] = useState("all");
  const [menuBt, setMenuBt] = useState([]);

  const seq = searchParams.get("seq");
  const childSeq = searchParams.get("childSeq");
  const q = searchParams.get("q");

  console.log(`seq는 ${seq}`);
  console.log(`childSeq는 ${childSeq}`);
  console.log(`q는 ${q}`);

  const navigate = useNavigate();

  const fetchData = async () => {
    if (childSeq) {
      await axios
        .get(
          `http://haeji.mawani.kro.kr:9999/cate/detail/menu?childSeq=${childSeq}`
        )
        .then((res) => {
          console.log(res.data.list);
          setSearchData(res.data.list);
          setStatus(res.data.status);
        })
        .catch((err) => {
          console.log(err);
          setStatus(err.response.data.status);
        });
    } else if (q) {
      await axios
        .get(
          `http://haeji.mawani.kro.kr:9999/cate/searchmenu?parentSeq=${seq}&menuName=${q}`
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
        .get(
          `http://haeji.mawani.kro.kr:9999/cate/searchmenu?parentSeq=${seq}&menuName=`
        )
        .then((res) => {
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
    new WOW.WOW().init();
  }, [seq, childSeq, q]);

  console.log(searchData);

  const cateData = async () => {
    const params = {
      parentSeq: seq,
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

  const searchResult = (e) => {
    if (e.key === "Enter") {
      navigate(`/menu/cate?seq=${seq}&q=${word}`);
    }
  };

  return (
    <section className="container mx-auto">
      {parseInt(seq) === 1 ? (
        <>
          <PagesTitle title={"음료"} />
          <PagesLink
            first={"메뉴"}
            firstLink={"/menu"}
            second={"음료"}
            secondLink={"#"}
            count={"two"}
          />
        </>
      ) : (
        ""
      )}
      {parseInt(seq) === 2 ? (
        <>
          <PagesTitle title={"음식"} />
          <PagesLink
            first={"메뉴"}
            firstLink={"/menu"}
            second={"음식"}
            secondLink={"#"}
            count={"two"}
          />
        </>
      ) : (
        ""
      )}
      <div className="pt-16 px-10 grid lg:grid-cols-5 pb-20">
        <div className="lg:col-span-1 mr-2">
          <MenuBt
            bt={bt}
            setBt={setBt}
            menuBt={menuBt}
            q={q}
            seq={seq}
            childSeq={childSeq}
            setWord={setWord}
          />
        </div>
        <main className="lg:col-span-4 ml-2">
          <div className="flex flex-wrap justify-end items-center lg:mb-7">
            <div className="w-full lg:w-[35%]">
              <div className="relative">
                <input
                  type="text"
                  className="bg-gray-50 border border-[#1B3C34] text-gray-900 text-sm rounded-lg block w-full pl-5 p-2.5"
                  placeholder="Search Menu"
                  value={word}
                  onChange={(e) => {
                    setWord(e.target.value);
                  }}
                  onKeyPress={(e) => searchResult(e)}
                />
                <button
                  className="absolute inset-y-0 right-3 flex items-center pl-3 cursor-pointer"
                  onClick={() => {
                    navigate(`/menu/cate?seq=${seq}&q=${word}`);
                  }}
                >
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
                </button>
              </div>
            </div>
          </div>
          <div className="wow fadeIn coffee mb-10" data-wow-slow="1.5s">
            {status ? (
              <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
                {searchData.map((item) => (
                  <MenuItem
                    link={`/menudetail/${item.menuNo}`}
                    key={item.menuNo}
                    img={item.menuUri}
                    name={item.menuName}
                    price={item.menuCost}
                  />
                ))}
              </div>
            ) : (
              <div class="flex justify-center items-center h-[30vh] px-4 bg-white">
                <h1 class="tracking-widest text-gray-500">
                  검색 결과가 없습니다.
                </h1>
              </div>
            )}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Menu;
