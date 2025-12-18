import React, { useState} from 'react';
import { Link, NavLink} from "react-router-dom";
import { IoSunnyOutline, IoMenu, IoClose, IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-navbar text-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-5">

        {/* LEFT SECTION OF NAVBAR */}
          <NavLink to="/">
        <div className="flex items-center gap-3 text-xl font-bold">
          <FaGraduationCap className="text-3xl" />
          <span className="cursor-pointer">Skill India</span>
        </div>
          </NavLink>

        {/* RIGHT SECTION (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-8">

          <span className="text-lg text-secondary font-medium cursor-pointer">
            <Link to="/course">Courses</Link>
          </span>

          <IoSunnyOutline
            className="text-2xl cursor-pointer"
            onClick={() =>
              setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode")
            }
          />

          <Link to="/cart">
            <FaCartShopping className="text-2xl cursor-pointer hover:text-blue-600" />
          </Link>

          {(
            <>
              <Link to="/login">
            <button className="bg-accent-primary px-4 py-1 rounded text-button cursor-pointer hover-bg-accent-primary">
              Login
            </button></Link>
          <Link to="/Signup">
            <button className="bg-accent-secondary px-4 py-1 rounded text-button cursor-pointer hover-bg-accent-secondary">
              Sign Up
            </button></Link>
            </>
          )}

        </div>

        {/* mobile */}
        <div
          className="lg:hidden text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>
      </div>

      {/* mobile menu  */}
      {open && (
        <div className="lg:hidden bg-navbar px-5 pb-5 animate-slideDown">

          <span className="block text-lg text-secondary font-medium py-2">
            <Link to="/course">Courses</Link>
          </span>

          {(
            <>
              <Link to="/login">
                <button className="bg-accent-primary w-full py-2 rounded text-button mt-3">
                  Login
                </button>
              </Link>

              <Link to="/signin">
                <button className="bg-accent-secondary w-full py-2 rounded text-button mt-2">
                  Sign In
                </button>
              </Link>
            </>
          )}

        </div>
      )}
    </header>
  );
};

export default Navbar;