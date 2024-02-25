import { useState } from "react";
import "../styles/login.css";

const port = process.env.PORT;

const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();
    try{
      fetch("http://localhost:5000/login", {
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
      <div className="brand-section">
      <img src={require('./Login.png')} alt="IBM Logo" />
      </div>
      <div className="form-section">
        <form className="login-form">
<<<<<<< HEAD
          <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="email" name="email" placeholder="Email Address" required />
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} id="password" name="password" placeholder="Password" required />
          <button type="submit" onClick={submit}>Login</button>
=======
          <h1>Hello!</h1>
          <h4>Welcome back</h4>

          <label htmlFor="Email">Email Address: </label>  
          <input type="email" id="email" name="email" placeholder="Email Address" required />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
>>>>>>> ef94ad2376fb8e0e28b078b08be9af2fce465727
          <p className="forgot-password">
            <a href="#">Forgot Password</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

