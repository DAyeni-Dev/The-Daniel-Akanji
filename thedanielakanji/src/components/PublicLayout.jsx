import { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { HomeIcon, AboutIcon, ContactIcon, BookIcon, DashboardIcon, MenuIcon, XIcon, BriefcaseIcon } from "./Icons";
import Footer from "./Footer";
import logo from "../assets/hero-bg.jpeg";

export default function PublicLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    setIsAdmin(!!token);
    setIsSidebarOpen(false); // Close sidebar on route change
    
    // Scroll main content to top on route change
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [location]);

  const navLinkClass = ({ isActive }) =>
    `w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
      isActive ? "bg-[#FF9A4A] text-white shadow-lg" : "text-gray-300 hover:bg-white/10"
    }`;

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-[#132347] text-white flex flex-col shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-14 w-16 object-cover rounded-md" />
            <div>
              <h1 className="text-xl font-bold tracking-wider">DANIEL AKANJI</h1>
              <p className="text-gray-400 text-xs mt-1">PR | COMMS | EVENTS</p>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-300 hover:text-white">
            <XIcon />
          </button>
        </div>

        <nav className="flex-1 py-6 space-y-2 px-4">
          <NavLink to="/" className={navLinkClass}>
            <HomeIcon />
            <span>Home</span>
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            <AboutIcon />
            <span>About</span>
          </NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>
            <BriefcaseIcon />
            <span>Portfolio</span>
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            <ContactIcon />
            <span>Contact</span>
          </NavLink>
          <NavLink to="/book" className={navLinkClass}>
            <BookIcon />
            <span>Book Consultation</span>
          </NavLink>

          {isAdmin && (
             <div className="pt-4 border-t border-gray-700 mt-2">
                <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Admin</p>
                <NavLink to="/admin/dashboard" className={navLinkClass}>
                  <DashboardIcon />
                  <span>Dashboard</span>
                </NavLink>
             </div>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full relative">
         {/* Mobile Header Button */}
         <div className="md:hidden absolute top-4 left-4 z-30">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="bg-white/80 p-2 rounded-md shadow-md text-gray-800 backdrop-blur-sm"
            >
              <MenuIcon />
            </button>
         </div>

        <main ref={mainRef} className="flex-1 overflow-auto">
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
}
