import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-emerald-500 font-medium"
      : "text-slate-700 hover:text-blue-600 transition";

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* ========== LOGO ========== */}
          <Link to="/" className="text-2xl font-bold text-blue-700">
            Estate<span className="text-emerald-500">Flow</span>
          </Link>

          {/* ========== DESKTOP MENU ========== */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/properties" className={navLinkClass}>
              Properties
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            {/* Auth buttons */}
            <div className="flex gap-3 ml-4">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* ========== MOBILE MENU BUTTON ========== */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ========== MOBILE MENU ========== */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 flex flex-col gap-4">
            <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink
              to="/properties"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Properties
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <div className="flex gap-3 pt-2">
              <Link
                to="/login"
                className="flex-1 text-center px-4 py-2 rounded-lg border border-blue-600 text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="flex-1 text-center px-4 py-2 rounded-lg bg-emerald-500 text-white"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
