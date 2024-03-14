import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showTooltip, setShowTooltip] = useState(false); // State to show/hide tooltip

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const mockEmail = "user@example.com";
    const mockPassword = "1234";

    if (email === mockEmail && password === mockPassword) {
      console.log("Login Success");
      navigate("/dashboard");
    } else {
      console.error("Login Failed");
      setShowTooltip(true); // Show tooltip on login failure
      setTimeout(() => setShowTooltip(false), 3000); // Hide tooltip after 3 seconds
    }
  };

  return (
    <div className="login-container">
      <div className="background-image">
        <div className="content">
          <img src="/assets/ibm_logo.svg" alt="Logo" className="logo" />
          <p className="header">Skills Build</p>
        </div>
      </div>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <p>Hello!</p>
          <p>Welcome back</p>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {showTooltip && (
            <div className="tooltip">
              Login Failed: Incorrect email or password.
              <span className="tooltip-text">Please try again.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
