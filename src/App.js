import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound";
import instance from "./api/axios";
import requests from "./api/request";
import Login from "pages/member/Login";
import SignUp from "pages/member/SignUp";
import IdFind from "pages/member/IdFind";
import PwFind from "pages/member/PwFind";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/idfind" element={<IdFind />} />
          <Route path="/pwfind" element={<PwFind />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
