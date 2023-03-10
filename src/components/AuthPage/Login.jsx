import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth/login.css";
import { UserAuth } from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("calendar");
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  return (
    <div className="loginSection">
      <h1 className="loginSection__font">Login</h1>
      <div>
        <label>Email</label>
        <input
          className="loginInput"
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="text-right">
        &nbsp;&nbsp;&nbsp;
        <Link to="/register">Sign Up</Link>
      </div>
      <button className="loginSectionButton" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}

export default Login;
