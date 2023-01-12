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
import Menudetail from "pages/menu/Menudetail";
import Cart from "pages/cart/Cart";
import Order from "pages/cart/Order";

const App = () => {
  return (
    <Router>
      <Reset />
      <Header />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/menudetail" element={<Menudetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
