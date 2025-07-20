import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { signInWithGoogle, signOut, user } = useAuth();
  const displayName = user?.user_metadata.user_name || user?.email;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className=" fixed top-0 z-40 w-full bg-gray-900 backdrop:blur-lg border-white/10 shadow-lg">
      <div className=" max-w-5xl mx-auto px-4">
        <div className=" flex justify-between items-center h-16">
          <Link to={"/"} className=" font-mono text-xl font-bold text-white">
            forum<span className=" text-purple-500">.app</span>
          </Link>
          <div className=" hidden md:flex  items-center space-x-8">
            <Link
              to={"/"}
              className=" text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to={"/create"}
              className=" text-gray-300 hover:text-white transition-colors"
            >
              Create Post
            </Link>
            <Link
              to={"/communites"}
              className=" text-gray-300 hover:text-white transition-colors"
            >
              Communities
            </Link>
            <Link
              to={"/community/create"}
              className=" text-gray-300 hover:text-white transition-colors"
            >
              Create Community
            </Link>
          </div>

          <div className=" hidden md:flex items-center">
            {user ? (
              <div className=" flex items-center space-x-4">
                {user.user_metadata.avatar_url && (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt=" user pic"
                    className=" w-8 h-8 rounded-full object-cover "
                  />
                )}

                <span className=" text-gray-300">{displayName}</span>
                <button
                  onClick={signOut}
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="bg-blue-500 px-3 py-1 rounded"
              >
                Sign In With Google
              </button>
            )}
          </div>

          {/* Mobile  */}

          <div className=" md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {!menuOpen ? <LuMenu /> : <LuX />}
            </button>
          </div>

          {menuOpen && (
            <div className=" md:hidden bg-gray-900 ">
              <div className=" px-2 pt-10 pb-3 space-y-2">
                <Link
                  to={"/"}
                  className=" block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Home
                </Link>
                <Link
                  to={"/create"}
                  className=" block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Create Post
                </Link>
                <Link
                  to={"/communites"}
                  className=" block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Communities
                </Link>
                <Link
                  to={"/community/create"}
                  className=" block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Create Community
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
