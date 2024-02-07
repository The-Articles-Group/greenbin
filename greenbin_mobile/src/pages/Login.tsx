import { useState } from "react";
import { getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import g from "../assets/g_icon.svg";

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
        window.location.href = '/'
        sessionStorage.setItem('uid', response.user.uid);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
        <div className="mt-4 text-center">
          <p className="text-2xl my-6">Sign In</p>
          <button
            className="inline-flex items-center mb-8 px-4 py-2 text-base font-medium rounded-md text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-500"
            onClick={signInWithGoogle}
            disabled={authing}
          >
            <img className="w-6 h-6 mr-2" src={g} alt="G" />
            <span className="ml-2">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
