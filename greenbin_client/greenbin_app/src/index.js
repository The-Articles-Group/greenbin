import React from "react";
import ReactDOM from "react-dom/client";
import { BrowswerRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// import App from './App';
import Provider from "./ServiceProvider";
import Home from "./Home";

// styles
import "./App.css";

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
    <Provider />
  </React.StrictMode>
);
