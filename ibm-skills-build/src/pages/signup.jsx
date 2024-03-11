import React, { useState } from "react";
import "../styles/chatbot.css"; // Assuming your CSS is here

function SignUpForm({ onSignUp }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(); // Callback to handle navigation after sign-up
  };

  return (
    <>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <p>Please Sign up for IBM SKills Build to access the courses.</p>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" className="recommended">
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignUpForm;
