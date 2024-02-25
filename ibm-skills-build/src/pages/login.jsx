import "../styles/login.css";


const Login = () => {
  return (
    <div className="login-container">
      <div className="brand-section">
      <img src={require('./Login.png')} alt="IBM Logo" />
      </div>
      <div className="form-section">
        <form className="login-form">
          <h1>Hello!</h1>
          <h4>Welcome back</h4>

          <label htmlFor="Email">Email Address: </label>  
          <input type="email" id="email" name="email" placeholder="Email Address" required />
          <label htmlFor="password">Password: </label>
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

