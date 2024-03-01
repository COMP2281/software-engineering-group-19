import ReactDOM from "react-dom";
import "./index.css";
import LoginPage from "./pages/login";
import Homepage from "./pages/homepage";
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
    </Routes>
  </BrowserRouter>
);
