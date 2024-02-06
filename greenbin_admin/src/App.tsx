import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthRoute from "./AuthRoute";
import Home from "./Home";
import Providers from "./Providers";
import Login from "./Login";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          {/* <div className="w-full h-20">
            <h1>GreenBin</h1>
            <NavLink
              to="/"
              className={`text-4xl${({ isActive, isPending }) =>
                isPending ? "text-yellow-300 font-bold" : isActive ? "text-black" : ""}`}
            >
              Home
            </NavLink>
          </div> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<div></div>}>
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
