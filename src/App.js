import { useSelector, useDispatch } from "react-redux";
import { Reset } from "styled-reset";
// Routes
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "pages/menu/Menu";
import NotFound from "./pages/NotFound";
import Login from "pages/member/Login";
// api
import instance from "./api/axios";
import requests from "./api/request";
<<<<<<< HEAD
import Login from "pages/member/Login";
import SignUp from "pages/member/SignUp";
import IdFind from "pages/member/IdFind";
import PwFind from "pages/member/PwFind";
=======
import Menudetail from "pages/menu/Menudetail";
import Cart from "pages/cart/Cart";
import Order from "pages/cart/Order";
>>>>>>> 6d90ba4af26959fb8c7a3045f8789f2ca26a9a07

const App = () => {
  return (
    <Router>
      <Reset />
      <Header />
<<<<<<< HEAD
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/idfind" element={<IdFind />} />
          <Route path="/pwfind" element={<PwFind />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
=======

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/menudetail" element={<Menudetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
>>>>>>> 6d90ba4af26959fb8c7a3045f8789f2ca26a9a07
    </Router>
  );
};

export default App;
