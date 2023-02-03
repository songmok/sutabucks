import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import instance from "../../../api/axios";
import request from "../../../api/request";

import PagesTitle from "components/common/pagesHeader/PagesTitle";
import PagesLink from "components/common/pagesHeader/PagesLink";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import MenuBt from "./MenuBt";
import MenuItem from "../ui/MenuItem";

const Menu = () => {
  const { cate } = useParams();
  // const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [status, setStatus] = useState(true);

  const [bt, setBt] = useState("all");
  const [menuBt, setMenuBt] = useState([]);

  console.log(cate);

  const fetchData = async () => {
    if (bt === "all") {
      await axios
        .get(
          `http://haeji.mawani.kro.kr:9999/cate/searchmenu?parentSeq=${cate}&menuName=`
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
  }, [bt, cate]);

  // console.log(bt);
  console.log(searchData);

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

  return (
    <section className="container mx-auto">
      {parseInt(cate) === 1 ? (
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
      {parseInt(cate) === 2 ? (
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
          <MenuBt bt={bt} setBt={setBt} menuBt={menuBt} />
        </div>
        <main className="lg:col-span-4 ml-2">
          <div className="coffee mb-10">
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
          </div>
        </main>
      </div>
    </section>
  );
};

export default Menu;
