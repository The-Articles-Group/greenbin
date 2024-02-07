import React from "react";
import { useState } from "react";
import { getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import g from "./assets/g_icon.svg";
import "./styles/login.css";

const Login = () => {
  const app = getApp();
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.error("error logging in:", error);
        setAuthing(false);
      });
  };

  return (
    <div class="login-container">
      <div class="login-box">
        <h2 class="login-title">Sign In</h2>
        <button class="google-signin-button" onClick={signInWithGoogle} disabled={authing}>
          <img class="google-icon" src={g} alt="G" />
          <span class="google-signin-text">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
