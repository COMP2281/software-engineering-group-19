import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoginPage from "./pages/login";
import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
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
      <Route path="/dashboard" element={<Dashboard/>} />

    </Routes>
  </BrowserRouter>
);
