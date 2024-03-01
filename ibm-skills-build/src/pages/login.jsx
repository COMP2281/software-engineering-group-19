import { useState } from "react";
import "../styles/login.css";

const port = 5000;

const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();
    try{
      fetch("/login", { //"http://localhost:5000/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister"); //CHeck name
        })

    }
    catch{

    }
  }
  return (
    <div className="login-container">
      <div className="background-image">
        <div className="content">
          <img src="/ibm_logo.svg" alt="Logo" className="logo"/>
          <p className="header">Skills Build</p>
        </div>
      </div>
      <div className="login-form">
        {/* Your login form goes here */}
        <form>
          <h2>Login</h2>
          {/* Input fields for email and password */}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {/* Submit button */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

