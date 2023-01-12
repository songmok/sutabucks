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

const App = () => {
  return (
    <Router>
      <Reset />
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
