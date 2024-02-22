import "../styles/login.css";


const Login = () => {
  return (
    <div className="login-container">
      <div className="brand-section">
        <h1>IBM SkillsBuild</h1>
      </div>
      <div className="form-section">
        <form className="login-form">
          <input type="email" id="email" name="email" placeholder="Email Address" required />
          <input type="password" id="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="forgot-password">
            <a href="#">Forgot Password</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

