import { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { getApp } from "firebase/app";

interface User {
  displayName: string | null;
  photoUrl: string | null;
}

const NavBar = () => {
  const app = getApp();
  const auth = getAuth(app);

  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          displayName: currentUser?.displayName,
          photoUrl: currentUser?.photoURL,
        });
      } else {
        setUser(null);
      }
    });
  }, [auth]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <div className="w-full h-14 bg-white flex flex-row items-center px-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-green-500">GreenBin</h1>
        <Link to="/home" className="text-xl pl-8 hover:text-green-500">
          Home
        </Link>
        <Link to="/providers" className="text-xl px-4 hover:text-green-500">
          Providers
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          {user ? (
            <div className="relative group">
              <button type="button" className="flex items-center focus:outline-none">
                <img
                  src={user.photoUrl || ""}
                  alt="User avatar"
                  className="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span className="text-base font-medium truncate">{user.displayName}</span>
                <svg
                  className="w-4 h-4 ml-2 text-gray-400 fill-current group-hover:text-green-500"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 15L15 10L10 5L5 10L10 15Z" />
                </svg>
              </button>

              <div className="absolute z-10 invisible group-hover:visible bg-white border border-gray-200 rounded-md shadow-md px-4 py-2">
                <Link to="/profile" className="block py-2 hover:bg-gray-100">
                  <span className="text-base font-medium">Profile</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block py-2 hover:bg-gray-100 text-red-500"
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            // Show placeholder or sign-in button here
            <p>error</p>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
