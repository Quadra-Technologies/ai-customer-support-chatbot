import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold"
        >
          <span className="text-slate-900">
            Dream
          </span>
          <span className="text-indigo-600">
            Events
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition hover:text-indigo-600 ${
                isActive
                  ? "text-indigo-600"
                  : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium transition hover:text-indigo-600 ${
                isActive
                  ? "text-indigo-600"
                  : "text-gray-700"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium transition hover:text-indigo-600 ${
                isActive
                  ? "text-indigo-600"
                  : "text-gray-700"
              }`
            }
          >
            Contact
          </NavLink>

          <Link
            to="/chat"
            className="
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            px-5
            py-2
            rounded-full
            transition
            shadow-lg
            "
          >
            AI Assistant
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() =>
            setIsOpen(!isOpen)
          }
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="block"
          >
            Contact
          </Link>

          <Link
            to="/chat"
            className="
            block
            bg-indigo-600
            text-white
            text-center
            py-2
            rounded-lg
            "
          >
            AI Assistant
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;