import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLoaderData } from "react-router-dom";
import { IoSunnyOutline, IoMenu, IoClose, IoSearch, IoPersonOutline, IoBookOutline, IoLogOutOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

const UserNavbar = ({ theme, setTheme }) => {
  // Safe destructuring from loader data
  const { user } = useLoaderData() || {}; 
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Logout function - only triggers from the dropdown button
  const handleLogout = () => {
    console.log("Logging out...");
    setDropdownOpen(false);
    navigate("/login"); 
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-navbar text-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-5">

        <div className="flex items-center gap-3 text-xl font-bold" onClick={() => navigate("")}>
          <FaGraduationCap className="text-3xl" />
          <span className="cursor-pointer">Skill India</span>
        </div>

        {/* RIGHT SECTION OF NAVBAR */}
        <div className="hidden lg:flex items-center gap-8">

          <span className="text-lg text-secondary font-medium cursor-pointer">
            <Link to="course">Courses</Link>
          </span>

          <IoSunnyOutline className="text-2xl cursor-pointer" onClick={() =>
            setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode")
          } />

          <Link to="Cart">
            <FaCartShopping className="text-2xl cursor-pointer hover:text-blue-600" />
          </Link>

          {/* PROFILE DROPDOWN WRAPPER */}
          <div className="relative" ref={dropdownRef}>
            <img
              src="https://th.bing.com/th/id/OIP.4OvvUCPSUCMZ5vDhyCeEbQHaHw?w=163&h=180"
              alt="profile"
              className="w-10 h-10 rounded-full border cursor-pointer hover:opacity-80 transition-all"
              onClick={() => setDropdownOpen(!dropdownOpen)} 
            />

            {/* DROPDOWN MENU */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-secondary border border-color rounded-lg shadow-xl animate-slideDown overflow-hidden z-50">
                {/* User Info Header */}
                <div className="p-4 flex items-center gap-3 border-b border-color">
                  <img src="https://th.bing.com/th/id/OIP.4OvvUCPSUCMZ5vDhyCeEbQHaHw?w=163&h=180" className="w-10 h-10 rounded-full border border-color" alt="user" />
                  <div className="flex flex-col">
                    {/* Dynamic Name and Email */}
                    <span className="font-bold text-primary text-sm">
                        {user?.fullName || "Guest"}
                    </span>
                    <span className="text-xs text-muted">
                        {user?.email || "No Email"}
                    </span>
                  </div>
                </div>

                {/* Dropdown Links */}
                <div className="py-1">
                  <div 
                    onClick={() => { navigate("profile"); setDropdownOpen(false); }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-blue-500/10 cursor-pointer transition-colors text-primary"
                  >
                    <IoPersonOutline className="text-lg" />
                    <span>My Profile</span>
                  </div>
                  
                  <Link 
                    to="/dashboard/learning" 
                    className="flex items-center gap-3 px-4 py-3 hover:bg-blue-500/10 transition-colors text-primary"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <IoBookOutline className="text-lg" />
                    <span>My Learning</span>
                  </Link>
                </div>

                {/* Logout Button */}
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-3 text-left border-t border-color hover:bg-red-500/10 transition-colors text-primary font-medium"
                >
                  <IoLogOutOutline className="text-lg text-red-500" />
                  <span>Log Out</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* HAMBURGER ICON */}
        <div
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>

      </div>

      {/* MOBILE / TABLET MENU */}
      {open && (
        <div className="lg:hidden bg-navbar px-5 pb-5 animate-slideDown">

          <span className="block text-lg text-secondary font-medium py-2">
            <Link to="/course">Courses</Link>
          </span>

          {/* MOBILE SEARCH BOX WITH ICON */}
          <div className="relative w-full mb-3">
            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-xl" />
            <input
              type="text"
              placeholder="Search for courses"
              className="bg-secondary pl-11 pr-3 py-2 rounded w-full placeholder:text-muted"
            />
          </div>

          <div className="flex items-center gap-5 py-2 text-xl">
            <IoSunnyOutline className="text-2xl cursor-pointer" onClick={() =>
              setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode")
            } />
            <Link to="/Cart"><FaCartShopping /></Link>
            <img 
               src="https://th.bing.com/th/id/OIP.4OvvUCPSUCMZ5vDhyCeEbQHaHw?w=163&h=180" 
               className="w-8 h-8 rounded-full cursor-pointer" 
               onClick={() => { navigate("profile"); setOpen(false); }} 
               alt="p"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default UserNavbar;