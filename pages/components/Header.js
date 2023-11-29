// components/Header.js

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/home" className="text-xl font-bold hover:underline">
            <img
              className="w-30 h-10 rounded-full"
              src="/images/logoo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-1">
          <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            {/* Displayed in mobile and hidden in larger screens */}
            <Link
              href="/auth/signin"
              className="block text-white  rounder py-2 px-4 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="block bg-orange-500 rounder text-white py-2 px-4 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Sign Up
            </Link>
          </div>
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {}
            {isMenuOpen ? (
              <img src="/images/close-icon.png" />
            ) : (
              <img src="/images/icon3.gif" />
            )}
          </button>
          <div className="hidden lg:flex items-center space-x-1">
            {/* Displayed in larger screens and hidden in mobile */}
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 text-black text-bold rounded p-1 focus:outline-none"
            />
            <Link
              className="text-white rounded-full px-4 py-2 hover:hover:bg-orange-600 hover:text-black hover:underline"
              href="/auth/signin"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
