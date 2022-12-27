import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth/login.css";

function Register() {
  return (
    <div className="loginSection">
      <h1 className="loginSection__font">Sign Up</h1>
      <div>
        <label>Email</label>
        <input className="loginInput" />
        <label>Password</label>
        <input className="loginInput" type="password" />
      </div>

      <div className="text-right">
        &nbsp;&nbsp;&nbsp;
        <Link to="/login">Login</Link>
      </div>
      <button className="loginSectionButton">Sign up</button>
    </div>
  );
}

export default Register;
