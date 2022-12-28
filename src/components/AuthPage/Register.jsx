import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth/login.css";
import { UserAuth } from "../../context/AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  return (
    <div className="loginSection">
      <h1 className="loginSection__font">Sign Up</h1>
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
        <Link to="/login">Login</Link>
      </div>
      <button className="loginSectionButton" onClick={handleSubmit}>
        Sign up
      </button>
    </div>
  );
}

export default Register;
