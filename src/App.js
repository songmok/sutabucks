import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Reset } from "styled-reset";
// Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// api
import instance from "./api/axios";
import requests from "./api/request";
// conponent
import Header from "./components/header/Header";
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
import IdFind from "pages/member/IdFind";
import PwFind from "pages/member/PwFind";
import IdResult from "pages/member/IdResult";
import PwResult from "pages/member/PwResult";
import MyPage from "pages/member/MyPage";
import MemberCard from "pages/member/MemberCard";
// 메뉴 및 상품
import Cart from "pages/cart/Cart";
import Order from "pages/cart/Order";
import Checkout from "pages/cart/Checkout";
import Menu from "pages/menu/Menu";
import Menudetail from "pages/menu/Menudetail";
import Maps from "pages/maps/Maps";
function App() {
  const [event, setEvent] = useState([]);
  const [eventDetail, setEventDetail] = useState([]);
  const [notice, setNotice] = useState([]);
  const [noticeDetail, setNoticeDetail] = useState([]);
  const [list, setList] = useState([]);
  const fetchData = async () => {
    const rsList = await instance.get(requests.fetchList);
    setList(rsList);
    const ev = await instance.get(requests.fetchEvent);
    setEvent(ev.data.event);
    const evDetail = await instance.get(requests.fetchEventDetail);
    setEventDetail(evDetail);
    const notice = await instance.get(requests.fetchNotice);
    setNotice(notice.data.event); //수정
    setNoticeDetail(notice.data.detail); //수정
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(event);
  console.log(eventDetail);
  return (
    <Router>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 새소식 */}
        <Route path="/news" element={<News />} />
        <Route path="/event" element={<Event event={event} />} />
        <Route
          path="/eventdetail/:seq"
          element={<EventDetail eventDetail={eventDetail} />}
        />
        <Route path="/notice" element={<Notice />} />
        <Route
          path="/noticedetail/:seq"
          element={<NoticeDetail noticeDetail={noticeDetail} />}
        />
        {/* 유저 정보 */}
        <Route path="/login" element={<Login />} />
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