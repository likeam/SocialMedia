import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
