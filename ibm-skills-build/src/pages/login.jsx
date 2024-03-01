import { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); // State to hold login success or error message

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Simulated credentials
    const mockEmail = "user@example.com";
    const mockPassword = "password123";

    // Simple login authentication using if statement
    if (email === mockEmail && password === mockPassword) {
      // Login successful
      console.log("Login Success");
      setLoginMessage("Login Successful!");
      // Here you can redirect the user or update the state to reflect the  login status
    } else {
      // Login failed
      console.error("Login Failed");
      setLoginMessage("Login Failed: Incorrect email or password.");
      // Optionally show an error message or handle the failed login
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
        </form>
        {loginMessage && <p>{loginMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
