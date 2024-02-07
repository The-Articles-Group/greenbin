import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("Unauthorized");
        navigate("/login");
      }
    });

    return () => AuthCheck();
  }, [auth, navigate]);

  if (loading) return <p>loading ...</p>;

  return <>{children}</>;
};

export default AuthRoute;
