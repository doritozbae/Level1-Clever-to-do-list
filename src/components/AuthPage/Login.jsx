import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/auth/login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../database/firebase";

function Login() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
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
      <button className="loginSectionButton" onClick={signIn}>
        Login
      </button>
    </div>
  );
}

export default Login;
