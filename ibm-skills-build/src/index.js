import ReactDOM from "react-dom";
import "./index.css";
import LoginPage from "./pages/login";
import Homepage from "./pages/homepage";
import Leaderboard from "./pages/leaderboard";

import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/homepage" element={<Homepage/>} />
      <Route path="/leaderboard" element={<Leaderboard/>} />
    </Routes>
  </BrowserRouter>
);
