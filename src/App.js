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
import NoticeList from "pages/news/notice/NoticeList";
import NoticeDetail from "pages/news/notice/NoticeDetail";
import EventList from "pages/news/event/EventList";
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
import Cart from "pages/cart/cart/Cart";
import Order from "pages/cart/order/Order";
import Checkout from "pages/cart/Checkout";
import Menu from "pages/menu/menuList/Menu";
import MenuHome from "pages/menu/MenuHome";
import Menudetail from "pages/menu/menuDetail/Menudetail";
import Maps from "pages/maps/Maps";
import Payment from "pages/cart/Payment";

import SignUpSelect from "pages/member/SignUpSelect";
import MyStorePage from "pages/mystore/MyStorePage";
import MyStoreMenu from "pages/mystore/MyStoreMenu";
import BzSignUp from "pages/member/bzmember/BzSignUp";
import Footer from "components/common/footer/Footer";

import QrMob from "pages/qrPage/QrMob";

function App() {
  const [eventList, setEventList] = useState([]);
  const [noticeList, setNoticeList] = useState([]);
  const [list, setList] = useState([]);

  // data
  const fetchData = async () => {
    const rsList = await instance.get(requests.fetchList);
    setList(rsList);
    //새소식
    const event = await instance.get(requests.fetchEvent);
    setEventList(event.data.event);
    const notice = await instance.get(requests.fetchNotice);
    setNoticeList(notice.data.notice);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // params

  return (
    <Router>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<Home noticeList={noticeList} />} />
        {/* 새소식 */}
        <Route path="/news" element={<News />} />
        <Route path="/event" element={<EventList eventList={eventList} />} />
        <Route path="/eventdetail/:seq" element={<EventDetail />} />
        <Route
          path="/notice"
          element={<NoticeList noticeList={noticeList} />}
        />
        <Route path="/noticedetail/:seq" element={<NoticeDetail />} />
        {/* 유저 정보 */}
        <Route path="/mystore/:seq" element={<MyStorePage />} />
        <Route path="/mystore/mystoremenu" element={<MyStoreMenu />} />
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
        {/* <Route path="/menu" element={<Menu />} /> */}

        <Route path="/menu" element={<MenuHome />} />
        <Route path="/menu/:cate" element={<Menu />} />
        <Route path="/menudetail/:seq" element={<Menudetail />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/order/:storeNo" element={<Order />} />
        {/* <Route path="/order" element={<Order />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/qrmob" element={<QrMob />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
