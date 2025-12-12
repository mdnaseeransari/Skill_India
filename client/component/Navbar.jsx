import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSunnyOutline, IoMenu, IoClose } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <header className="bg-navbar text-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-5">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3 text-xl font-bold">
          <Link to="/"><FaGraduationCap className="text-3xl" /></Link>
          <span>
            
            <Link to="/">Skill India</Link>
          </span>
        </div>

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

          {!user && (
            <>
              <Link to="/Login">
            <button className="bg-accent-primary px-4 py-1 rounded text-button cursor-pointer hover-bg-accent-primary">
              Login
            </button></Link>
          <Link to="/Signin">
            <button className="bg-accent-secondary px-4 py-1 rounded text-button cursor-pointer hover-bg-accent-secondary">
              Sign Up
            </button></Link>
            </>
          )}

          {user && (
            <Link to="/profile">
              <button className="cursor-pointer">
                <img
                  src="https://th.bing.com/th/id/OIP.4OvvUCPSUCMZ5vDhyCeEbQHaHw?w=163&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                  alt="profile"
                  className="w-7 h-7 rounded-full"
                />
              </button>
            </Link>
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

          {!user && (
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

          {user && (
            <Link to="/profile">
              <button className="bg-accent-secondary w-full py-2 rounded text-button mt-3 flex items-center justify-center">
                <img
                  src="https://th.bing.com/th/id/OIP.4OvvUCPSUCMZ5vDhyCeEbQHaHw?w=163&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                  alt="profile"
                  className="w-7 h-7 rounded-full"
                />
              </button>
            </Link>
          )}

        </div>
      )}
    </header>
  );
};

export default Navbar;
