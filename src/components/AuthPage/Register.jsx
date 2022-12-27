import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/auth/login.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../database/firebase";

function Register() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("yra yra");
      })
      .catch((error) => {
        //   const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
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
      <button className="loginSectionButton" onClick={signUp}>
        Sign up
      </button>
    </div>
  );
}

export default Register;
