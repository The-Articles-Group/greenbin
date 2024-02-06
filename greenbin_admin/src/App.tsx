import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthRoute from "./AuthRoute";
import Home from "./Home";
import Providers from "./Providers";
import Login from "./Login";
import NotFound from "./NotFound";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<NavBar />}>
              <Route
                path="/home"
                element={
                  <AuthRoute>
                    <Home />
                  </AuthRoute>
                }
              />
              <Route
                path="/providers"
                element={
                  <AuthRoute>
                    <Providers />
                  </AuthRoute>
                }
              />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
