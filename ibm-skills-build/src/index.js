import ReactDOM from "react-dom";
import "./index.css";
import LoginPage from "./pages/login";
import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import Chatbot from "./pages/chatbot";
import LeaderboardPage from "./pages/leaderboard";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>0
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
    </Routes>
  </BrowserRouter>
);
