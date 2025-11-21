import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { IoSunnyOutline, IoMenu, IoClose, IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {

  const [open, setOpen] = useState(false);
  
  const toggleTheme = () => {
    setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode");
  };
  return (
    <header className="bg-navbar text-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-5">

        {/* LEFT SECTION OF NAVBAR */}
        <div className="flex items-center gap-3 text-xl font-bold">
          <FaGraduationCap className="text-3xl" />
          <span className="cursor-pointer"><Link to="/">Skill India</Link></span>
        </div>

        {/* RIGHT SECTION OF NAVBAR */}
        <div className="hidden lg:flex items-center gap-8">

          <span className="text-lg text-secondary font-medium cursor-pointer">
            <Link to="/course">Courses</Link>
          </span>

          
          <div className="relative w-64">
            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted text-lg" />
            <input 
              type="text" 
              placeholder="Search for courses" 
              className="bg-secondary pl-10 pr-3 py-2 rounded w-full placeholder:text-muted"
            />
          </div>

          <IoSunnyOutline className="text-2xl cursor-pointer" onClick={() =>
              setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode")
            }  />
          <Link to="/Cart">
            <FaCartShopping className="text-2xl cursor-pointer hover:text-blue-600" />
          </Link>

          <button className="bg-accent-primary px-4 py-1 rounded text-button cursor-pointer hover-bg-accent-primary">
            <Link to="/Login">Login</Link>
          </button>

          <button className="bg-accent-secondary px-4 py-1 rounded text-button cursor-pointer hover-bg-accent-secondary">
            <Link to="/Signin">Sign In</Link>
          </button>

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
            Courses
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
            <FaCartShopping />
          </div>

          <button className="bg-accent-primary w-full py-2 rounded text-button mt-3">
            Login
          </button>

          <button className="bg-accent-secondary w-full py-2 rounded text-button mt-2">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
