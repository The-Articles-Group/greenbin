import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import App from './App';
import Provider from "./ServiceProvider";
import Home from "./Home";

// styles
import "./App.css";

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";
import Login from "./Login";
import AuthRoute from "./components/AuthRoute";
import User from "./User";

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user"
            element={
              <AuthRoute>
                <User />
              </AuthRoute>
            }
          />
          <Route
            path="/provider"
            element={
              <AuthRoute>
                <Provider />
              </AuthRoute>
            }
          />
        </Routes>
      </Router>
    </HelmetProvider>
    <Provider />
  </React.StrictMode>
);
