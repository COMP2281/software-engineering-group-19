import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);


