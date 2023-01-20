import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Reset } from "styled-reset";
// Routes
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "pages/menu/Menu";
import NotFound from "./pages/NotFound";
// api
import instance from "./api/axios";
import requests from "./api/request";
import Login from "pages/member/Login";
import SignUp from "pages/member/SignUp";
import IdFind from "pages/member/IdFind";
import PwFind from "pages/member/PwFind";
import Menudetail from "pages/menu/Menudetail";
import Cart from "pages/cart/Cart";
import Order from "pages/cart/Order";
import IdResult from "pages/member/IdResult";
import PwResult from "pages/member/PwResult";
import MyPage from "pages/member/MyPage";
import Checkout from "pages/cart/Checkout";

const App = () => {
  const [list, setList] = useState([]);
  const fetchData = async () => {
    const rsList = await instance.get(requests.fetchList);
    setList(rsList);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(list);
  return (
    <Router>
      <Reset />
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/idfind" element={<IdFind />} />
        <Route path="/idresult" element={<IdResult />} />
        <Route path="/pwfind" element={<PwFind />} />
        <Route path="/pwresult" element={<PwResult />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menudetail" element={<Menudetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
