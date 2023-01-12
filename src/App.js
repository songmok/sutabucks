import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import instance from "./api/axios";
import requests from "./api/request";
import Menu from "pages/menu/Menu";
import Menudetail from "pages/menu/Menudetail";
import Cart from "pages/cart/Cart";
import Order from "pages/cart/Order";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/menudetail" element={<Menudetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
