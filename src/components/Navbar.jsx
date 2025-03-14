import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onHover, onLeave }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Company Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-xl font-bold text-gray-800 cursor-pointer"
              onMouseEnter={() => onHover("home")}
            >
              Company Name
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-700 px-3 py-2 transition-colors duration-300"
              onMouseEnter={() => onHover("home")}
              onMouseLeave={onLeave}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-blue-500 hover:text-blue-700 px-3 py-2 transition-colors duration-300"
              onMouseEnter={() => onHover("about")}
              onMouseLeave={onLeave}
            >
              About
            </Link>
            <Link
              to="/careers"
              className="text-blue-500 hover:text-blue-700 px-3 py-2 transition-colors duration-300"
              onMouseEnter={() => onHover("careers")}
              onMouseLeave={onLeave}
            >
              Careers
            </Link>
            <Link
              to="/products"
              className="text-blue-500 hover:text-blue-700 px-3 py-2 transition-colors duration-300"
              onMouseEnter={() => onHover("products")}
              onMouseLeave={onLeave}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-blue-500 hover:text-blue-700 px-3 py-2 transition-colors duration-300"
              onMouseEnter={() => onHover("contact")}
              onMouseLeave={onLeave}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block text-blue-500 hover:text-blue-700 px-3 py-2"
            onMouseEnter={() => onHover("home")}
            onMouseLeave={onLeave}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-blue-500 hover:text-blue-700 px-3 py-2"
            onMouseEnter={() => onHover("about")}
            onMouseLeave={onLeave}
          >
            About
          </Link>
          <Link
            to="/careers"
            className="block text-blue-500 hover:text-blue-700 px-3 py-2"
            onMouseEnter={() => onHover("careers")}
            onMouseLeave={onLeave}
          >
            Careers
          </Link>
          <Link
            to="/products"
            className="block text-blue-500 hover:text-blue-700 px-3 py-2"
            onMouseEnter={() => onHover("products")}
            onMouseLeave={onLeave}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="block text-blue-500 hover:text-blue-700 px-3 py-2"
            onMouseEnter={() => onHover("contact")}
            onMouseLeave={onLeave}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;