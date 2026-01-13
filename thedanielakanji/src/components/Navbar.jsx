import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/hero-bg.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#132347" }}>
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-20 object-cover squared-full"
            />
          </Link>
          <Link
            to="/"
            className="text-white font-semibold text-xl hover:opacity-80"
          >
            Daniel Akanji
          </Link>
        </div>

        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" style={{ color: "#FFFFFF" }}>About</Link>
          <Link to="/contact" style={{ color: "#FFFFFF" }}>Contact</Link>
          <Link
            to="/book"
            style={{ backgroundColor: "#FF9A4A", color: "#132347" }}
            className="px-6 py-2 rounded-md font-medium hover:opacity-80 transition"
          >
            Book Consultation
          </Link>
        </div>

        
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      
      {isOpen && (
        <div className="md:hidden px-8 pb-4 flex flex-col space-y-3" style={{ backgroundColor: "#132347" }}>
          <Link to="/about" style={{ color: "#FFFFFF" }}>About</Link>
          <Link to="/contact" style={{ color: "#FFFFFF" }}>Contact</Link>
          <Link
            to="/book"
            style={{ backgroundColor: "#FF9A4A", color: "#132347" }}
            className="px-6 py-2 rounded-md font-medium hover:opacity-80 transition"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
