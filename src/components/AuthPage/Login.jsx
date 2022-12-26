import React from "react";
// import { Link } from "react-router-dom";
import "../../styles/auth/login.css";

function Login() {
  return (
    <div className="loginSection">
      <h1 className="loginSection__font">Sign In</h1>
      <div>
        <label>Email</label>
        <input className="loginInput" />
        <label>Password</label>
        <input className="loginInput" type="password" />
      </div>

      <div className="text-right">
        &nbsp;&nbsp;&nbsp;
        {/* <Link to="/register">Sign Up</Link> */}
      </div>
      <button className="loginSectionButton">Sign in</button>
    </div>
  );
}

export default Login;
