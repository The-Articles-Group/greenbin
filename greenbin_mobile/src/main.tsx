import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute.tsx";
import Login from "./pages/Login.tsx";
import User from "./pages/User.tsx";
import Provider from "./pages/Provider.tsx";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.ts";

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <App />
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
  </React.StrictMode>
);
