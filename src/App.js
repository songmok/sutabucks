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
import Menu from "pages/menu/Menu";
import Menudetail from "pages/menu/Menudetail";
import Cart from "pages/cart/Cart";
import Order from "pages/cart/Order";

const App = () => {
  return (
    <Router>
      <Reset />
      <Header />
<<<<<<< HEAD
      <div className="container">
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/menudetail" element={<Menudetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
=======
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
>>>>>>> 89aee23c997c63b25cfb7fea7cd70177a91ccf4a
    </Router>
  );
};

export default App;
