import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Reset } from "styled-reset";
// Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// api
import instance from "./api/axios";
import requests from "./api/request";
// conponent common
import Header from "components/common/header/Header";
// pages
import Home from "pages/home/Home";
import NotFound from "./pages/NotFound";
// 새소식
import News from "pages/news/News";
import Notice from "pages/news/notice/Notice";
import NoticeDetail from "pages/news/notice/NoticeDetail";
import Event from "pages/news/event/Event";
import EventDetail from "pages/news/event/EventDetail";
// 유저정보
import Login from "pages/member/Login";
import SignUp from "pages/member/SignUp";
import IdFind from "pages/member/find/IdFind";
import PwFind from "pages/member/find/PwFind";
import IdResult from "pages/member/find/IdResult";
import PwResult from "pages/member/find/PwResult";
import MyPage from "pages/member/MyPage";
import MemberCard from "pages/member/MemberCard";
// 메뉴 및 상품
import Cart from "pages/cart/Cart";
import Order from "pages/cart/Order";
import Checkout from "pages/cart/Checkout";
import Menu from "pages/menu/Menu";
import Menudetail from "pages/menu/Menudetail";
import Maps from "pages/maps/Maps";

import SignUpSelect from "pages/member/SignUpSelect";
import MyStorePage from "pages/mystore/MyStorePage";
import MyStoreMenu from "pages/mystore/MyStoreMenu";
import BzSignUp from "pages/member/bzmember/BzSignUp";

function App() {
  const [event, setEvent] = useState([]);
  const [notice, setNotice] = useState([]);
  const [list, setList] = useState([]);
  const [myStoreInfo, setMyStoreInfo] = useState([]);
  const [myStoreMenu, setMyStoreMenu] = useState([]);
  // ?ediSeq=1
  const fetchData = async () => {
    const rsList = await instance.get(requests.fetchList);
    setList(rsList);
    //새소식
    const event = await instance.get(requests.fetchEvent);
    setEvent(event.data.event);
    const notice = await instance.get(requests.fetchNotice);
    setNotice(notice.data.notice);
    // 가게정보
    const myStoreInfo = await instance.get(requests.fetchMyStoreInfo);
    setMyStoreInfo(myStoreInfo.list);
    const myStoreMenu = await instance.get(requests.fetchMyStoreMenu);
    setMyStoreMenu(myStoreMenu.list.menus);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(event);
  // console.log(myStoreInfo);
  // console.log(notice);
  // console.log(myStoreMenu);
  return (
    <Router>
      <Reset />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* 새소식 */}
        <Route path="/news" element={<News />} />
        <Route path="/event" element={<Event event={event} />} />
        <Route path="/eventdetail/:seq" element={<EventDetail />} />
        <Route path="/notice" element={<Notice notice={notice} />} />
        <Route path="/noticedetail/:seq" element={<NoticeDetail />} />
        {/* 유저 정보 */}
        <Route
          path="/mystore"
          element={<MyStorePage myStoreInfo={myStoreInfo} />}
        />
        <Route
          path="/mystore/mystoremenu"
          element={<MyStoreMenu myStoreMenu={myStoreMenu} />}
        />
        <Route path="/singupselect" element={<SignUpSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bzsignup" element={<BzSignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/idfind" element={<IdFind />} />
        <Route path="/idresult" element={<IdResult />} />
        <Route path="/pwfind" element={<PwFind />} />
        <Route path="/pwresult" element={<PwResult />} />
        <Route path="/membercard" element={<MemberCard />} />
        {/* 메뉴 및 상품 */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/menudetail/:seq" element={<Menudetail />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
