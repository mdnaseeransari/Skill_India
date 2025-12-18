import React from 'react'
import { FaGraduationCap } from 'react-icons/fa6'
import { IoSunnyOutline } from 'react-icons/io5'
import { NavLink, useNavigate } from 'react-router-dom'

const AdminNavbar = ({ theme, setTheme }) => {
  const navigate=useNavigate();
  return (
<>
    <div className='bg-navbar text-primary sticky top-0 z-50 shadow-md flex items-center justify-between p-5'>
        <NavLink to="/admin">
        <div className="flex items-center gap-3 text-xl font-bold cursor-pointer">
          <FaGraduationCap className="text-3xl" />
          <span className="cursor-pointer">Skill India</span>
        </div>
        </NavLink>
        <div className='flex  flex-col justify-center items-center'>
        <h1 className='text-4xl text-primary'>Admin Dashboard</h1>
        <p className='text-secondary'>Manage courses and users.</p>
        </div>
        <div className='flex justify-center items-center gap-10'>
        <IoSunnyOutline className="text-2xl cursor-pointer" onClick={() =>
        setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode")
        } />
        <img
            src="https://th.bing.com/th/id/OIP.4OvvUCPSUCMZ5vDhyCeEbQHaHw?w=163&h=180"
            alt="profile"
            className="w-10 h-10 rounded-full border cursor-pointer"
            onClick={()=>navigate("profile")}
        />
        </div>
    </div>
</>
  )
}

export default AdminNavbar
