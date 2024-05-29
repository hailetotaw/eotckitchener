import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#ede9d0] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center">
                <img src="/logo.png" className="h-12 mr-2" alt="Logo" />
                {/* <span className="text-xl font-bold">MyApp</span> */}
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <div className="text-gray-800 hover:text-gray-600">Home</div>
              </Link>
              <Link href="/about">
                <div className="text-gray-800 hover:text-gray-600">About</div>
              </Link>
              <Link href="/contact">
                <div className="text-gray-800 hover:text-gray-600">Contact</div>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <div className="block text-gray-800 hover:text-gray-600">
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="block text-gray-800 hover:text-gray-600">
                About
              </div>
            </Link>
            <Link href="/contact">
              <div className="block text-gray-800 hover:text-gray-600">
                Contact
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
