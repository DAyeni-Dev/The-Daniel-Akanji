import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/hero-bg.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    setIsAdmin(!!token);
  }, [location]);

  const closeMenu = () => setIsOpen(false);

  const desktopLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md transition ${
      isActive ? "text-[#FF9A4A]" : "text-white hover:text-[#FF9A4A]"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `px-4 py-3 rounded-md transition text-center ${
      isActive ? "bg-[#FF9A4A] text-[#132347]" : "text-white active:bg-[#FF9A4A] focus:bg-[#FF9A4A]"
    }`;

  return (
    <header className="bg-[#132347]">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-20 object-cover rounded-md"
            />
          </Link>
          <Link
            to="/"
            onClick={closeMenu}
            className="text-white hover:bg-[#FF9A4A] px-3 py-2 rounded-md transition active:bg-[#FF9A4A]"
          >
            Daniel Akanji
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={desktopLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={desktopLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={desktopLinkClass}>
            Contact
          </NavLink>

          {isAdmin && (
            <NavLink to="/admin/dashboard" className={desktopLinkClass}>
              Dashboard
            </NavLink>
          )}

          <NavLink
            to="/book"
            className={({ isActive }) =>
              `px-6 py-2 rounded-md font-medium transition ${
                isActive
                  ? "bg-[#FF9A4A] text-[#132347]"
                  : "bg-[#FF9A4A] text-[#132347] hover:opacity-40"
              }`
            }
          >
            Book Consultation
          </NavLink>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden bg-[#132347] px-8 pb-6 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 mt-4">
          <NavLink to="/" onClick={closeMenu} className={mobileLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu} className={mobileLinkClass}>
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={mobileLinkClass}
          >
            Contact
          </NavLink>

          {isAdmin && (
            <NavLink
              to="/admin/dashboard"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              Dashboard
            </NavLink>
          )}

          <NavLink
            to="/book"
            onClick={closeMenu}
            className={({ isActive }) =>
              `px-6 py-3 rounded-md font-medium transition text-center ${
                isActive
                  ? "bg-[#FF9A4A] text-[#132347]"
                  : "bg-[#FF9A4A] text-[#132347] hover:opacity-40"
              }`
            }
          >
            Book Consultation
          </NavLink>
        </div>
      </div>
    </header>
  );
}
