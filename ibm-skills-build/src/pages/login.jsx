import { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Assuming you have an API endpoint at /api/login for authentication
    const response = await fetch(`http://localhost:5000/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Login successful
      const data = await response.json();
      console.log('Login Success:', data);
      // Redirect user or save the login state
    } else {
      // Login failed
      console.error('Login Failed');
      // Show error message
    }
  };

  return (
    <div className="login-container">
      <div className="background-image">
        <div className="content">
          <img src="/assets/ibm_logo.svg" alt="Logo" className="logo"/>
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
      </div>
    </div>
  );
};

export default Login;
